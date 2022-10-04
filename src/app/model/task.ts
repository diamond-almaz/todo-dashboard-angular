export enum TaskStatus {
    todo = 'todo',
    inprogress = 'inprogress',
    done = 'done',
}


export interface ITask {
    description: string;
}

export interface IEditableTask extends ITask {
    isEdit?: boolean;
}

export type UnusedDoneTasks = {
  [key in Exclude<TaskStatus, TaskStatus.inprogress>]: IEditableTask[];
}

export interface ITasks extends UnusedDoneTasks {
    [TaskStatus.inprogress]: IEditableTask[];
}