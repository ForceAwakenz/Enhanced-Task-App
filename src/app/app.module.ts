import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaskAppGeneralModule } from './task-app-general/task-app-general.module';
import { StoreModule } from '@ngrx/store';
import { STORAGE_SERVICE } from './shared/models/StorageService';
import { LocalStorageService } from './shared/services/local-storage.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    TaskAppGeneralModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],
  providers: [{ provide: STORAGE_SERVICE, useClass: LocalStorageService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
