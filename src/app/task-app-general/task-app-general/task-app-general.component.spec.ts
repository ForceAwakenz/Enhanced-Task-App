import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat/mat.module';
import { TaskInputComponent } from '../task-input/task-input.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TaskAppGeneralComponent } from './task-app-general.component';

describe('TaskAppGeneralComponent', () => {
  let component: TaskAppGeneralComponent;
  let fixture: ComponentFixture<TaskAppGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TaskAppGeneralComponent,
        TaskInputComponent,
        TaskListComponent,
        ToolbarComponent,
      ],
      imports: [MatModule, FormsModule, ReactiveFormsModule, CommonModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAppGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
