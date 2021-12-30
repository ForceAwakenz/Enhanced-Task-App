import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { StorageService, STORAGE_SERVICE } from "../shared/models/StorageService";
import { saveToStorage } from "./actions-main";

@Injectable()
export class MainEffects {

  storeTaskList$ = createEffect(() => 
    this.actions$.pipe(
      ofType(saveToStorage),
      tap(
        action => this.storageService.storeTaskList(action.taskList)
      )
    ), { dispatch: false }
  )

  constructor(@Inject(STORAGE_SERVICE) private storageService: StorageService,
    private actions$: Actions) {}
}