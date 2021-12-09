import { Injectable } from '@angular/core';
import { ITask } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class FormatTaskService {
  private _checkedTask!: ITask;

  constructor() { }

  get checkedTask(): ITask {
    return this._checkedTask;
  }

  set checkedTask(taskToCheck: {text: string, date?: string}) {
    this._checkedTask = {
      text: taskToCheck.text,
      date: taskToCheck.date || new Date().toDateString(),
      isDone: false,
      id: +(new Date())
    }
  }


}
