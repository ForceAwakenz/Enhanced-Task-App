import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { MatModule } from 'src/app/mat/mat.module';
import { AppInitState } from 'src/app/redux/task-app-general.reducers';
import { filterInput, taskList } from 'src/app/redux/task-app-general.selectors';
import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
      imports: [ MatModule, FormsModule ],
      providers: [ provideMockStore({
          initialState: AppInitState,
          selectors: [
            { selector: taskList, 
              value: [
              {text: '2', date: new Date().toLocaleDateString(), isDone: false, id: +(new Date())},
              {text: '1', date: new Date().toLocaleDateString(), isDone: false, id: +(new Date())},
              ]
            },
            { selector: filterInput, value: '1' },
          ]
        })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.sortedTaskList = [
      {text: '1', date: '12/17/1995', isDone: false, id: 55},
      {text: '2', date: '12/18/1995', isDone: false, id: 44},
    ];
    component.taskList = [
      {text: '2', date: '12/18/1995', isDone: false, id: 44},
      {text: '1', date: '12/17/1995', isDone: false, id: 55},
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should quit sortData function in unactive sort property', () => {
    component.sortData({direction: '', active: ''});
    expect(component.taskList).toEqual(component.sortedTaskList);
  });

  it('sortData should sort taskList', () => {
    component.sortData({direction: 'asc', active: 'text'});
    expect(component.sortedTaskList[0].text).toBe('1');
  });
});
