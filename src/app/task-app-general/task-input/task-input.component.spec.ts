import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppInitState } from 'src/app/redux/task-app-general.reducers';
import { FormatTaskService } from 'src/app/shared/services/format-task.service';

import { TaskInputComponent } from './task-input.component';

describe('TaskInputComponent', () => {
  let component: TaskInputComponent;
  let fixture: ComponentFixture<TaskInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInputComponent ],
      providers: [ provideMockStore({initialState: AppInitState}), FormatTaskService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
