import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";
import { GlobalState } from "../shared/models/GlobalState";
import { StorageService, STORAGE_SERVICE } from "../shared/models/StorageService";
import { getFromStorage, loadFromStorage, saveToStorage, updateStorage } from "./task-app-general.actions";

@Injectable()
export class TaskAppGeneralEffects {
  
  constructor(
    @Inject(STORAGE_SERVICE) private storageService: StorageService,
    private actions$: Actions,
    private store: Store<GlobalState>) {}

  // updateStorage$ = createEffect(() => {
  //   this.actions$.pipe(
  //     ofType(updateStorage),
  //     tap(

  //     )
  //   ), { dispatch: false }
  // });

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