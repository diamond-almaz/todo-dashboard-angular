import { Injectable } from '@angular/core';
import { ITasks, TaskStatus } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {

  tasks: ITasks = {
    [TaskStatus.todo]: [],
    [TaskStatus.inprogress]: [],
    [TaskStatus.done]: [],
  };

  constructor() { }


  addTask(description: string) {
    this.tasks[TaskStatus.todo].push({
      description,
    })

  }

  deleteTask(i: number, status: TaskStatus) {
    this.tasks[status].splice(i, 1);
  }

  changeTask(i: number, status: TaskStatus, newDescription: string) {
    this.tasks[status][i].description = newDescription;
  }
}
