import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { AppInitState } from './redux/task-app-general.reducers';
import { STORAGE_SERVICE } from './shared/models/StorageService';
import { TaskAppGeneralModule } from './task-app-general/task-app-general.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TaskAppGeneralModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      declarations: [
        AppComponent,
      ],
      providers: [ 
        provideMockStore({initialState: AppInitState}),
        {provide: STORAGE_SERVICE, useValue: { storeTaskList: () => {} } },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
