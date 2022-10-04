import { CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ITask, ITasks, TaskStatus } from '../model/task';
import { TodoServicesService } from '../services/todo-services.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks!: ITasks;
  passedChangeTask= this.changeTask.bind(this);

  constructor(private todoServices: TodoServicesService) {

    this.tasks = this.todoServices.tasks;
  }

  addTask(description: string) {
    this.todoServices.addTask(description);

  }
  deleteTask({ i, status }: {i: number, status: TaskStatus}) {
    this.todoServices.deleteTask(i, status);
  }

  changeTask(i: number, status: TaskStatus, newDescription: string) {
    this.todoServices.changeTask(i, status, newDescription);
  }


  ngOnInit(): void {
    console.log('ngOnInit')
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
