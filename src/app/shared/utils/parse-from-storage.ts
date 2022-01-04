import { Store } from "@ngrx/store";
import { loadFromStorage } from "src/app/redux/task-app-general.actions";
import { StorageService } from "../models/StorageService";

export function parseFromStorage(store: Store, localStorageService: StorageService) {
  store.dispatch(
    loadFromStorage({ taskList: localStorageService.getTaskListFromStorage() })
  );
}
