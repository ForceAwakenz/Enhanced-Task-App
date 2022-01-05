import { Injectable } from '@angular/core';
import { ITask } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class FormatTaskService {

  formatTask(taskToCheck: {text: string, date?: Date}): ITask {
    return {
      text: taskToCheck.text,
      date: taskToCheck.date?.toDateString() || new Date().toDateString(),
      isDone: false,
      id: +(new Date())
    }
  }

}
