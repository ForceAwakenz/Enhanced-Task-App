import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { ITask } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  taskList$ = new BehaviorSubject<ITask[]>([]);

  constructor() { 
    if ( localStorage.getItem('taskList')) {
      this.taskList$.next( JSON.parse(localStorage.getItem('taskList') || ''));
    }
  }

  getTaskList() {
    return this.taskList$.asObservable();
  }

  deleteTask(currentTaskId: number) {
    this.taskList$.next(
      [...this.taskList$.value.filter( task => task.id !== currentTaskId)]
    );
    localStorage.setItem('taskList', JSON.stringify(this.taskList$.value));
  }

  addTask(task: ITask) {
    this.taskList$.next([...this.taskList$.value, task]);
    localStorage.setItem('taskList', JSON.stringify(this.taskList$.value));
  }

}
