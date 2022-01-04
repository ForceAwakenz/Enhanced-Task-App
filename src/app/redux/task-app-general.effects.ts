import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { skip, switchMap, tap } from "rxjs";
import { GlobalState } from "../shared/models/GlobalState";
import { StorageService, STORAGE_SERVICE } from "../shared/models/StorageService";
import { getFromStorage, loadFromStorage, saveToStorage, updateStorage } from "./task-app-general.actions";
import { taskList } from "./task-app-general.selectors";

@Injectable()
export class TaskAppGeneralEffects {

  taskListSubscription$ = this.store.pipe(
    select(taskList),
    skip(1),
  );
  
  constructor(
    @Inject(STORAGE_SERVICE) private storageService: StorageService,
    private actions$: Actions,
    private store: Store<GlobalState>) {}

  updateStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStorage),
      switchMap(action => this.taskListSubscription$),
      tap(
        taskList => this.store.dispatch(saveToStorage({taskList}))
      )
    ), { dispatch: false }
  );

  loadFromStorage$ = createEffect(() => 
    this.actions$.pipe(
      ofType(getFromStorage),
      tap(
        action => this.store.dispatch(
          loadFromStorage({ taskList: this.storageService.getTaskListFromStorage() })
        )
      )
    ), { dispatch: false }
  );

  storeTaskList$ = createEffect(() => 
    this.actions$.pipe(
      ofType(saveToStorage),
      tap(
        action => this.storageService.storeTaskList(action.taskList)
      )
    ), { dispatch: false }
  );

}