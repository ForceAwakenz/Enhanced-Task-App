import { Injectable } from '@angular/core';
import { ITask } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor() { }

  getTaskList(): ITask[] {
    return [
      { text: 'buy a milk', date: '04.12.2021', isDone: false, id: 1},
      { text: 'buy a car', date: '05.12.2021', isDone: false, id: 2},
      { text: 'buy a driver\'s licence', date: '04.12.2021', isDone: false, id: 3},
    ]
  }



}
