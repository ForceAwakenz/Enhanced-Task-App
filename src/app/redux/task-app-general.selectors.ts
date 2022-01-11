import { createSelector } from "@ngrx/store";
import { GlobalState } from "../shared/models/GlobalState";


export const taskList = createSelector(
  (state: GlobalState) => state.generalState,
  generalState => generalState.taskList
);

export const filterInput = createSelector(
  (state: GlobalState) => state.generalState,
  generalState => generalState.filterInput
)