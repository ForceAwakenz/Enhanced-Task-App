import { InjectionToken } from "@angular/core";
import { ITask } from "./Task";

export const STORAGE_SERVICE = new InjectionToken<StorageService>('storageService');

export abstract class StorageService {
  abstract storeTaskList(taskList: ITask[]): void;
  abstract getTaskListFromStorage(): ITask[];
}
