import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store';
import { skip, Subscription } from 'rxjs';
import { loadFromStorageService, saveToStorage } from 'src/app/redux/task-app-general.actions';
import { taskList } from 'src/app/redux/task-app-general.selectors';
import { GlobalState } from 'src/app/shared/models/GlobalState';
import { StorageService, STORAGE_SERVICE } from 'src/app/shared/models/StorageService';

@Component({
  selector: 'app-task-app-general',
  templateUrl: './task-app-general.component.html',
  styleUrls: ['./task-app-general.component.scss']
})
export class TaskAppGeneralComponent implements OnInit, OnDestroy {

  taskListSubscription$ = new Subscription();

  constructor(
    private store: Store<GlobalState>, 
    @Inject(STORAGE_SERVICE) private storageService: StorageService) {}

  ngOnInit(): void {
    this.store.dispatch(loadFromStorageService({taskList: this.storageService.getTaskListFromStorage()}));
    this.taskListSubscription$ = this.store.pipe(
        skip(2),
        select(taskList)
    ).subscribe( 
      taskList => this.store.dispatch(saveToStorage({taskList}))
    );
  }

  ngOnDestroy(): void {
    this.taskListSubscription$.unsubscribe();
  }

}
