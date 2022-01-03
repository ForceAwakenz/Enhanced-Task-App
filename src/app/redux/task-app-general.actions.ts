import { createAction, props } from "@ngrx/store";
import { ITask } from "../shared/models/Task";

export enum TaskAppGeneralActions {
  GET_FROM_STORAGE = '[TaskAppGeneral] Get from Storage',
  LOAD_FROM_STORAGE = '[TaskAppGeneral] Load from Storage',
  UPDATE_STORAGE = '[TaskAppGeneral] Update Storage',
  SAVE_TO_STORAGE = '[TaskAppGeneral] Save to Storage',
  ADD_TASK = '[TaskAppGeneral] Add Task',
  REMOVE_TASK = '[TaskAppGeneral] Remove Task',
  UPDATE_TASK = '[TaskAppGeneral] Update Task',
  UPDATE_FILTER = '[TaskAppGeneral] Update Filter',
};

export const updateStorage = createAction(
  TaskAppGeneralActions.UPDATE_STORAGE,
)

export const getFromStorage = createAction(
  TaskAppGeneralActions.GET_FROM_STORAGE,
);

export const loadFromStorage = createAction(
  TaskAppGeneralActions.LOAD_FROM_STORAGE,
  props<{ taskList: ITask[]}>()
);

export const addTaskToState = createAction(
  TaskAppGeneralActions.ADD_TASK,
  props<{ task: ITask }>()
);

export const removeTask = createAction(
  TaskAppGeneralActions.REMOVE_TASK,
  props<{ id: number }>()
);

export const saveToStorage = createAction(
  TaskAppGeneralActions.SAVE_TO_STORAGE,
  props<{ taskList: ITask[] }>()
);

export const updateTask = createAction(
  TaskAppGeneralActions.UPDATE_TASK,
  props<{ updatedTask: ITask }>()
);

export const updateFilter = createAction(
  TaskAppGeneralActions.UPDATE_FILTER,
  props<{ filterInput: string }>()
);