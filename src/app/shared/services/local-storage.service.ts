import { Injectable } from '@angular/core';
import { StorageService as StorageService } from '../models/StorageService';
import { ITask } from '../models/Task';

const TASK_LIST_IN_LOCAL_STORAGE = 'taskList';

@Injectable()
export class LocalStorageService extends StorageService {

  storeTaskList(taskList: ITask[]): void {
    localStorage.setItem(TASK_LIST_IN_LOCAL_STORAGE, JSON.stringify(taskList))
  }

  get taskListFromStorage(): ITask[] {
    return JSON.parse(localStorage.getItem(TASK_LIST_IN_LOCAL_STORAGE) || '[]');
  }

}
