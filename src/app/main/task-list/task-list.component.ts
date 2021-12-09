import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { startWith, Subscription, switchMap } from 'rxjs';
import { ITask } from '../../../app/shared/models/Task';
import { FilterInputService } from '../../../app/shared/services/filter-input.service';
import { TaskDataService } from '../../../app/shared/services/task-data.service';
import { compare } from 'src/app/shared/utils/compare';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  displayedColumns = ['text', 'date', 'isDone', 'id'];
  taskList!: ITask[];
  sortedTaskList!: ITask[];
  searchPhrazeSubscription$!: Subscription;

  constructor(
    private taskDataService: TaskDataService, 
    private filterInputService: FilterInputService) {}
  
  ngOnInit(): void {
    this.searchPhrazeSubscription$ = this.filterInputService.searchPhraze$.pipe(
      startWith(''),
      switchMap(searchUpdate$ => this.taskDataService.getTaskList(searchUpdate$))
    )
    .subscribe(taskList => {
      this.taskList = taskList;
      this.sortedTaskList = this.taskList.slice();
    });
  }

  ngOnDestroy() {
    this.searchPhrazeSubscription$.unsubscribe();
  }

  
  onTaskClick(row: ITask): void {
    row.isDone = !row.isDone;
  }

  onIsDoneChanged(event: Event): void {
    event.stopPropagation();
  }
  
  onRemove(currentTask: ITask, event: Event): void {
    event.stopPropagation();
    this.taskDataService.deleteTask(currentTask.id);    
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
