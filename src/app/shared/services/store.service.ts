import { Injectable } from '@angular/core';
import { ITask } from '../models/Task';

const TASK_LIST_IN_LOCAL_STORAGE = 'taskList';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  saveTaskListToStorage(taskList: ITask[]): void {
    localStorage.setItem(TASK_LIST_IN_LOCAL_STORAGE, JSON.stringify(taskList))
  }

  get taskListFromStorage(): ITask[] {
    return JSON.parse(localStorage.getItem(TASK_LIST_IN_LOCAL_STORAGE) || '[]');
  }
  
}
