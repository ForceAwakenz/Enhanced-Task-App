import {
  createReducer, on,
} from '@ngrx/store';
import { ITask } from 'src/app/shared/models/Task';
import { addTaskToState, loadFromStorageService, removeTask, updateFilter, updateTask } from './actions-main';

export const mainFeatureKey = 'main';

export interface GlobalState {
  main: MainState
}

export interface MainState {
  taskList: ITask[];
  filterInput: string;
}

export const  initialMainState: MainState = {
  taskList: [],
  filterInput: '',
}

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
    (state, action) => ({...state, 
      taskList: state.taskList.filter(task => task.id !== action.id)
    })
  ),
  on(
    updateTask,
    (state, action) => ({...state, 
      taskList: state.taskList.map(
        task => task.id == action.updatedTask.id ? action.updatedTask : task
      )
    })
  ),
  on(
    updateFilter,
    (state, action) => ({...state, filterInput: action.filterInput })
  )
);
