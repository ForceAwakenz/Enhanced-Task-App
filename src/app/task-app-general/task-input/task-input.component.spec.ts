import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MatModule } from 'src/app/mat/mat.module';
import { AppInitState } from 'src/app/redux/task-app-general.reducers';
import { FormatTaskService } from 'src/app/shared/services/format-task.service';
import { TaskInputComponent } from './task-input.component';

describe('TaskInputComponent', () => {
  let component: TaskInputComponent;
  let fixture: ComponentFixture<TaskInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInputComponent ],
      imports: [MatModule],
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

  it('should turn to true isAddTaskClicked', fakeAsync(() => {
    component.nameInput = { nativeElement: {focus: jasmine.createSpy().and.stub()} } as any;
    fixture.componentInstance.onAddTaskBtnClicked();
    tick(500);
    expect(component.isAddTaskClicked).toBeTruthy();
    expect(component.nameInput.nativeElement.focus).toHaveBeenCalled();
  }));
});
