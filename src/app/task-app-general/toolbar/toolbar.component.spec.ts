import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { provideMockStore } from '@ngrx/store/testing';
import { AppInitState } from 'src/app/redux/task-app-general.reducers';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      providers: [ provideMockStore({initialState: AppInitState}) ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
