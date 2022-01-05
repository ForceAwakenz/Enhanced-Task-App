import { ITask } from "./Task";

export interface MainState {
    taskList: ITask[];
    filterInput: string;
  }