import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ITask } from '../models/Task';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  private taskList$ = new BehaviorSubject<ITask[]>([]);

  constructor(private storeService: StoreService) { 
      this.taskList$.next(this.storeService.taskListFromStorage);
  }

  getTaskList(filterPhraze: string): Observable<ITask[]> {
    return this.taskList$.pipe(
      map((taskList: ITask[]) => taskList.filter(task => task.text?.includes(filterPhraze)))
    );
  }

  deleteTask(currentTaskId: number): void {
    this.taskList$.next(
      [...this.taskList$.value.filter( task => task.id !== currentTaskId)]
    );
    this.storeService.saveTaskListToStorage(this.taskList$.value);
  }

  addTask(task: ITask): void {
    this.taskList$.next([...this.taskList$.value, task]);
    this.storeService.saveTaskListToStorage(this.taskList$.value);
  }



}
