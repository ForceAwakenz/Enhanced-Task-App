import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { provideMockStore } from '@ngrx/store/testing';
import { AppInitState } from 'src/app/redux/task-app-general.reducers';
import { MatModule } from 'src/app/mat/mat.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [MatModule, FormsModule, ReactiveFormsModule],
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
