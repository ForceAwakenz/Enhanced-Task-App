import { TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { GlobalState } from "../shared/models/GlobalState";
import { AppInitState } from "./task-app-general.reducers";
import { filterInput, taskList } from "./task-app-general.selectors";


describe('TaskAppGeneral Selectors', () => {

let state: GlobalState;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: provideMockStore({
        initialState: AppInitState,
        selectors: [
          { selector: taskList, 
            value: [
            {text: '2', date: '12/18/1995', isDone: false, id: 44},
            {text: '1', date: '12/17/1995', isDone: false, id: 55},
            ]
          },
          { selector: filterInput, value: '1' },
        ]
      })
    })
    state = {
      generalState: {
        taskList: [
          {text: '2', date: '12/18/1995', isDone: false, id: 44},
          {text: '1', date: '12/18/1995', isDone: false, id: 55},
        ],
        filterInput: '1',
      }
    };
  })

  it('taskList should return taskList', () => {
    expect(taskList(state)).toEqual(state.generalState.taskList);
  });

  it('filterInput should return filterInput', () => {
    expect(filterInput(state)).toEqual(state.generalState.filterInput);
  });
})