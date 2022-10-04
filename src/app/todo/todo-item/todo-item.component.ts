import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask, ITasks, TaskStatus } from 'src/app/model/task';
import { TodoComponent } from '../todo.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() tasks!: ITask[];
  @Input() taskStatus!: TaskStatus;
  @Input() drop!: (event: CdkDragDrop<ITask[]>) => void;
  @Output() deleteTask: EventEmitter<{i: number, status: TaskStatus}> = new EventEmitter();
  @Input() blurInput!: (i: number, status: TaskStatus, newDescription: string) => void;
  

  constructor() {}

  getReadonly(status: TaskStatus) {
    return status !== TaskStatus.todo;
  }

  onDelete(i: number, status: TaskStatus) {
    console.log('onDelete')
    this.deleteTask.emit({ i, status })
  }

  allowedButtonsOptions(status: TaskStatus) {

    const options = [{
      color: 'warn',
      matIcon: 'delete',
      onClick: this.onDelete.bind(this),
    }]
    if (status === TaskStatus.done) {
      options.push({
        color: 'accent',
        matIcon: 'check_circle',
        onClick: () => {}
      })
    }
    return options;
  }

}
