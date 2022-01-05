import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, tap, withLatestFrom } from "rxjs";
import { GlobalState } from "../shared/models/GlobalState";
import { StorageService, STORAGE_SERVICE } from "../shared/models/StorageService";
import { addTaskToState, removeTask, saveToStorage, updateTask } from "./task-app-general.actions";
import { taskList } from "./task-app-general.selectors";

@Injectable()
export class TaskAppGeneralEffects {
  
  constructor(
    @Inject(STORAGE_SERVICE) private storageService: StorageService,
    private actions$: Actions,
    private store: Store<GlobalState>) {}

  updateStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTaskToState, removeTask, updateTask),
      withLatestFrom(this.store.select(taskList)),
      map(
        ([action, taskList]) => saveToStorage({taskList})
      )
    ), { dispatch: true }
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