import { Component, Inject, OnInit } from '@angular/core'
import { State, Store } from '@ngrx/store';
import { take } from 'rxjs';
import { loadFromStorage } from 'src/app/redux/actions-main';
import { StorageKeeper, STORAGE_SERVICE } from 'src/app/shared/models/StorageKeeper';
import { ITask } from 'src/app/shared/models/Task';
import { TaskDataService } from 'src/app/shared/services/task-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private store: Store, 
    private taskDataService: TaskDataService) {}

  ngOnInit(): void {
    this.taskDataService.getTaskList$('').pipe(take(1)).subscribe(
      (taskList: ITask[]) => {
        this.store.dispatch(loadFromStorage({ taskList: taskList }));
      }
    )
  }
}
