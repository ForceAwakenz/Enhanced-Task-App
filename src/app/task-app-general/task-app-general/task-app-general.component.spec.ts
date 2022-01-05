import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskAppGeneralComponent } from './task-app-general.component';

describe('MainComponent', () => {
  let component: TaskAppGeneralComponent;
  let fixture: ComponentFixture<TaskAppGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TaskAppGeneralComponent,
      ],
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
