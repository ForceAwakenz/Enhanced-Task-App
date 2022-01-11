import { ITask } from "./Task";

export interface TaskAppGeneralState {
    taskList: ITask[];
    filterInput: string;
  }