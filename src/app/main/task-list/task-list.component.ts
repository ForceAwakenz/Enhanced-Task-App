import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ITask } from 'src/app/shared/models/Task';
import { FilterInputService } from 'src/app/shared/services/filter-input.service';
import { TaskDataService } from 'src/app/shared/services/task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  displayedColumns = ['text', 'date', 'isDone', 'id'];
  taskList!: ITask[];
  sortedTaskList!: ITask[];

  constructor(
    private taskDataService: TaskDataService, 
    private filterInputService: FilterInputService) {}
  
  ngOnInit(): void {
    this.taskDataService.getTaskList(this.filterInputService.getSearchPhraze()).subscribe(taskList => {
      this.taskList = taskList;
      this.sortedTaskList = this.taskList.slice();
    });
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

}

function compare(a: number | string, b: number | string, isAsc: boolean) {  
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
