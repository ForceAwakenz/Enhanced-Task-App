import { Component, OnInit } from '@angular/core'
import { Sort } from '@angular/material/sort';
import { ITask } from 'src/app/shared/models/Task';
import { TaskDataService } from 'src/app/shared/services/task-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  displayedColumns = ['text', 'date', 'isDone'];
  taskList!: ITask[];
  sortedTaskList!: ITask[];

  constructor(private taskDataService: TaskDataService) {
  }
  
  ngOnInit(): void {
    this.taskList = this.taskDataService.getTaskList();
    this.sortedTaskList = this.taskList.slice();
  }

  sortData(sort: Sort) {

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


function compare(a: number | string, b: number | string, isAsc: boolean) {  
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}