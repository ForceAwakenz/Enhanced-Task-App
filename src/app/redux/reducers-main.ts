import {
  ActionReducerMap, createReducer, on, State,
} from '@ngrx/store';
import { ITask } from 'src/app/shared/models/Task';
import { addTaskToState, loadFromStorageService, removeTask, saveToStorage } from './actions-main';

export const mainFeatureKey = 'main';

export interface GlobalState {
  main: MainState
}

export interface MainState {
  taskList: ITask[];
}

export const  initialMainState: MainState = {
  taskList: [],
}

// export const reducers: ActionReducerMap<MainState> = {

// };

export const mainReducer = createReducer(
  initialMainState,
  on(
    loadFromStorageService,
    (state, action) => ({...state, taskList: action.taskList})) ,
  on(
    addTaskToState,
    (state, action) => ({...state, taskList: state.taskList.concat(action.task)})
  ),
  on(
    removeTask,
    (state, action) => ({...state, taskList: state.taskList.filter(task => task.id !== action.id)})
  ),
);
