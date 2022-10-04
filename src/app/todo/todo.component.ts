import { CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ITask, ITasks, TaskStatus } from '../model/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup;
  tasks: ITasks = {
    [TaskStatus.todo]: [],
    [TaskStatus.inprogress]: [],
    [TaskStatus.done]: [],
  };

  passedDeleteTask= this.deleteTask.bind(this);
  passedBlurInput= this.blurInput.bind(this);

  constructor(private fb: FormBuilder) {
    this.todoForm = fb.group({
      item: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  addTask() {
    this.tasks[TaskStatus.todo].push({
      description: this.todoForm.value.item,
    })

    this.todoForm.reset();
  }

  deleteTask({i, status}: {i: number, status: TaskStatus}) {
    this.tasks[status].splice(i, 1);
  }

  blurInput(i: number, status: TaskStatus, newDescription: string) {
    this.tasks[status][i].description = newDescription;
  }

  drop(event: CdkDragDrop<ITask[]>) {
    console.log('event', event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  enter(event: CdkDragEnter<ITask[]>) {
  }

}
