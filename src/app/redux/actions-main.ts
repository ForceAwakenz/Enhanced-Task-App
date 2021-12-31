import { createAction, props } from "@ngrx/store";
import { ITask } from "../shared/models/Task";

export enum MainActions {
  LOAD_FROM_STORAGE = '[Main] Load from Storage',
  SAVE_TO_STORAGE = '[Main] Save to Storage',
  ADD_TASK = '[Main] Add Task',
  REMOVE_TASK = '[Main] Remove Task',
  UPDATE_TASK = '[Main] Update Task',
  UPDATE_FILTER = '[Main] Update Filter',
};

export const loadFromStorageService = createAction(
  MainActions.LOAD_FROM_STORAGE,
   props<{ taskList: ITask[] }>()
);

export const addTaskToState = createAction(
  MainActions.ADD_TASK,
  props<{ task: ITask }>()
);

export const removeTask = createAction(
  MainActions.REMOVE_TASK,
  props<{ id: number }>()
);

export const saveToStorage = createAction(
  MainActions.SAVE_TO_STORAGE,
  props<{ taskList: ITask[] }>()
);

export const updateTask = createAction(
  MainActions.UPDATE_TASK,
  props<{ updatedTask: ITask }>()
);

export const updateFilter = createAction(
  MainActions.UPDATE_FILTER,
  props<{ filterInput: string }>()
);