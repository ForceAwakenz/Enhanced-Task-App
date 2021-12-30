import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskInputComponent } from './task-input/task-input.component';

import { MatModule } from '../mat/mat.module';
import { StoreModule } from '@ngrx/store';
import * as fromMain from '../redux/reducers-main';
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from '../redux/effects-main';


@NgModule({
  declarations: [
    MainComponent,
    ToolbarComponent,
    TaskListComponent,
    TaskInputComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatModule,
    StoreModule.forFeature(fromMain.mainFeatureKey, fromMain.mainReducer),
    EffectsModule.forFeature([MainEffects]),
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule {}
