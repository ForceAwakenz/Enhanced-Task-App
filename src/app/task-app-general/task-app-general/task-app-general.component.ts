import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store';
import { skip, Subscription } from 'rxjs';
import { getFromStorage, saveToStorage } from 'src/app/redux/task-app-general.actions';
import { taskList } from 'src/app/redux/task-app-general.selectors';
import { GlobalState } from 'src/app/shared/models/GlobalState';

@Component({
  selector: 'app-task-app-general',
  templateUrl: './task-app-general.component.html',
  styleUrls: ['./task-app-general.component.scss']
})
export class TaskAppGeneralComponent implements OnInit, OnDestroy {

  taskListSubscription$ = new Subscription();

  constructor(private store: Store<GlobalState>) {}

  ngOnInit(): void {
    this.store.dispatch(getFromStorage());
    this.store.dispatch(updateStorage());
    // this.taskListSubscription$ = this.store.pipe(
    //   select(taskList),
    //   skip(1),
    // ).subscribe( 
    //   taskList => this.store.dispatch(saveToStorage({taskList}))
    // );
  }

  ngOnDestroy(): void {
    this.taskListSubscription$.unsubscribe();
  }

}
function updateStorage(): any {
  throw new Error('Function not implemented.');
}

