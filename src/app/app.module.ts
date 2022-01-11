import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaskAppGeneralModule } from './task-app-general/task-app-general.module';
import { Store, StoreModule } from '@ngrx/store';
import { StorageService, STORAGE_SERVICE } from './shared/models/StorageService';
import { LocalStorageService } from './shared/services/local-storage.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { parseFromStorage } from './shared/utils/parse-from-storage';
import * as fromMain from './redux/task-app-general.reducers';
import { TaskAppGeneralEffects } from './redux/task-app-general.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    TaskAppGeneralModule,
    StoreModule.forRoot({[fromMain.mainFeatureKey]: fromMain.mainReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TaskAppGeneralEffects]),
  ],
  providers: [
    { provide: STORAGE_SERVICE, useClass: LocalStorageService },
    { 
      provide: APP_INITIALIZER, 
      useFactory: (store: Store, storageService: StorageService) => () => parseFromStorage(store, storageService), 
      multi: true, 
      deps: [ Store, STORAGE_SERVICE ] 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
