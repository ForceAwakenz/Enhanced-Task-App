import { createSelector } from "@ngrx/store";
import { GlobalState } from "./reducers-main";


export const taskList = createSelector(
  (state: GlobalState) => state.main,
  main => main.taskList
) 