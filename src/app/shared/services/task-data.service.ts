import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { StorageKeeper, STORAGE_SERVICE } from '../models/StorageKeeper';
import { ITask } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  private taskList$ = new BehaviorSubject<ITask[]>([]);

  constructor(@Inject(STORAGE_SERVICE) private storeService: StorageKeeper) { 
      this.taskList$.next(this.storeService.taskListFromStorage);
  }

  getTaskList$(filterPhraze: string): Observable<ITask[]> {
    return this.taskList$.pipe(
      map((taskList: ITask[]) => taskList.filter(task => task.text?.includes(filterPhraze)))
    );
  }

  // deleteTask(currentTaskId: number): void {
  //   this.taskList$.next(
  //     [...this.taskList$.value.filter( task => task.id !== currentTaskId)]
  //   );
  //   this.storeService.storeTaskList(this.taskList$.value);
  // }

  // addTask(task: ITask): void {
  //   this.taskList$.next([...this.taskList$.value, task]);
  //   this.storeService.storeTaskList(this.taskList$.value);
  // }

}
