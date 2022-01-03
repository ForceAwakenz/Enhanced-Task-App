import { createSelector } from "@ngrx/store";
import { GlobalState } from "../shared/models/GlobalState";


export const taskList = createSelector(
  (state: GlobalState) => state.main,
  main => main.taskList
);

export const filterInput = createSelector(
  (state: GlobalState) => state.main,
  main => main.filterInput
)