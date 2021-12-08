import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ITask } from '../models/Task';

const TASK_LIST_IN_LOCAL_STORAGE = 'taskList';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  private taskList$ = new BehaviorSubject<ITask[]>([]);

  constructor() { 
      this.taskList$.next(this.taskListFromStorage);
  }

  getTaskList(filterPhraze: string): Observable<ITask[]> {
    return this.taskList$.asObservable().pipe(
      map((taskList: ITask[]) => taskList.filter(task => task.text?.includes(filterPhraze)))
    );
  }

  deleteTask(currentTaskId: number): void {
    this.taskList$.next(
      [...this.taskList$.value.filter( task => task.id !== currentTaskId)]
    );
    this.saveTaskListToStorage(this.taskList$.value);
  }

  addTask(task: ITask): void {
    this.taskList$.next([...this.taskList$.value, task]);
    this.saveTaskListToStorage(this.taskList$.value);
  }

  private saveTaskListToStorage(taskList: ITask[]): void {
    localStorage.setItem(TASK_LIST_IN_LOCAL_STORAGE, JSON.stringify(taskList))
  }

  private get taskListFromStorage(): ITask[] {
    return JSON.parse(localStorage.getItem(TASK_LIST_IN_LOCAL_STORAGE) || '[]');
  }

}
