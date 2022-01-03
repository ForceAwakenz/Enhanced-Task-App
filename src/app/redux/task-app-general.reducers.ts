import {
  createReducer, on,
} from '@ngrx/store';
import { MainState as TaskAppGeneralState } from '../shared/models/MainState';
import { addTaskToState, getFromStorage, loadFromStorage, removeTask, updateFilter, updateTask } from './task-app-general.actions';

export const mainFeatureKey = 'main';

export const  APP_INITIALIZER: TaskAppGeneralState = {
  taskList: [],
  filterInput: '',
}

export const mainReducer = createReducer(
  APP_INITIALIZER,
  on(
    loadFromStorage,
    (state, action) => ({ ...state, taskList: action.taskList })
  ),
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
