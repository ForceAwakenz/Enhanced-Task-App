import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, first, map, Observable, startWith, switchMap, tap} from 'rxjs';
import { ITask } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  private taskList$ = new BehaviorSubject<ITask[]>([]);

  constructor() { 
      this.taskList$.next(JSON.parse(localStorage.getItem('taskList') || ''));
  }

  getTaskList(filterPhraze: string): Observable<ITask[]> {
    return this.taskList$.asObservable().pipe(
      map((taskList: ITask[]) => taskList.filter(task => task.text.includes(filterPhraze)))
    );
  }

  deleteTask(currentTaskId: number): void {
    this.taskList$.next(
      [...this.taskList$.value.filter( task => task.id !== currentTaskId)]
    );
    localStorage.setItem('taskList', JSON.stringify(this.taskList$.value));
  }

  addTask(task: ITask): void {
    this.taskList$.next([...this.taskList$.value, task]);
    localStorage.setItem('taskList', JSON.stringify(this.taskList$.value));
  }

}
