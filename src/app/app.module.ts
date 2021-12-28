import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainModule } from './main/main.module';
import { StoreModule } from '@ngrx/store';
import { STORAGE_SERVICE } from './shared/models/StorageKeeper';
import { LocalStorageService } from './shared/services/local-storage.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MainModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [{ provide: STORAGE_SERVICE, useClass: LocalStorageService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
