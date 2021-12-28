import { createAction, props } from "@ngrx/store";
import { ITask } from "../shared/models/Task";

export enum StorageActions {
  LOAD_FROM_STORAGE = '[Main] Load from Storage',
  SAVE_TO_STORAGE = '[Main] Save to Storage',
  ADD_TASK = '[Main] Add Task',
  REMOVE_TASK = '[Main] Remove Task',
};

export const loadFromStorage = createAction(
  StorageActions.LOAD_FROM_STORAGE,
   props<{ taskList: ITask[] }>()
);

export const addTaskToState = createAction(
  StorageActions.ADD_TASK,
  props<{ task: ITask }>()
);

export const removeTask = createAction(
  StorageActions.REMOVE_TASK,
  props<{ id: number }>()
);

export const saveToStorage = createAction(
  StorageActions.SAVE_TO_STORAGE,
  props<{ taskList: ITask[] }>()
)
