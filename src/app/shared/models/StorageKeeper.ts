import { InjectionToken } from "@angular/core";
import { ITask } from "./Task";

export const STORAGE_SERVICE = new InjectionToken<StorageKeeper>('storageService');

export abstract class StorageKeeper {
  abstract storeTaskList(taskList: ITask[]): void;
  abstract get taskListFromStorage(): ITask[];
}