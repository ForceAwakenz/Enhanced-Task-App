import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { combineLatest, Observable, Subscription} from 'rxjs';
import { ITask } from '../../../app/shared/models/Task';
import { compare } from 'src/app/shared/utils/compare';
import { select, Store } from '@ngrx/store';
import { GlobalState } from 'src/app/redux/reducers-main';
import { removeTask, updateTask } from 'src/app/redux/actions-main';
import { filterInput, taskList } from 'src/app/redux/selectors-main';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  displayedColumns = ['text', 'date', 'isDone', 'id'];
  sortedTaskList!: ITask[];
  taskList!: ITask[];
  taskList$ = new Observable<ITask[]>();
  filterInput$ = new Observable<string>();
  filteringListSubscription$ = new Subscription();

  constructor(
    private store: Store<GlobalState>) {}
  
  ngOnInit(): void {
    this.taskList$ = this.store.pipe(select(taskList));
    this.filterInput$ = this.store.pipe(select(filterInput));
    this.filteringListSubscription$ = combineLatest([this.taskList$, this.filterInput$])  
        .subscribe(([taskList, filterInput ])=> {
      this.taskList = taskList.slice();
      this.sortedTaskList = taskList.slice().filter( task => task.text.includes(filterInput));
    });
  }

  ngOnDestroy() {
    this.filteringListSubscription$.unsubscribe();
  }

  onTaskClick(task: ITask): void {
    const updatedTask: ITask = {...task};
    updatedTask.isDone = !updatedTask.isDone;
    this.store.dispatch(updateTask({ updatedTask }));
  }
  
  onRemove(currentTask: ITask, event: Event): void {
    event.stopPropagation();
    this.store.dispatch(removeTask({id: currentTask.id}));
  }

  sortData(sort: Sort): void {

    const data = this.taskList.slice();
    
    if (!sort.active || sort.direction === '') {
      this.sortedTaskList = data;
      return;
    }

    this.sortedTaskList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'text':
          return compare(a.text, b.text, isAsc);
        case 'date':
          return compare(a.date, b.date, isAsc);
        case 'isDone':
          return compare(+a.isDone, +b.isDone, isAsc);
        default:
          return 0;
      }
    });

  }

}
