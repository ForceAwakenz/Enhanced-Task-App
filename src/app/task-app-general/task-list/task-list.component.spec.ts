import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppInitState } from 'src/app/redux/task-app-general.reducers';
import { taskList } from 'src/app/redux/task-app-general.selectors';

import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
      providers: [ provideMockStore({initialState: AppInitState})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.sortedTaskList = [
      {text: '1', date: new Date().toLocaleDateString(), isDone: false, id: +(new Date())},
      {text: '2', date: new Date().toLocaleDateString(), isDone: false, id: +(new Date())},
    ];
    component.taskList = [
      {text: '2', date: new Date().toLocaleDateString(), isDone: false, id: +(new Date())},
      {text: '1', date: new Date().toLocaleDateString(), isDone: false, id: +(new Date())},
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should quit sortData function in unactive sort property', () => {
    component.sortData({direction: '', active: '0'});
    expect(component.taskList).toEqual(component.sortedTaskList);
  });
});
