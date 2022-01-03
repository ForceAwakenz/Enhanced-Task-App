import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAppGeneralComponent } from './task-app-general/task-app-general.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskInputComponent } from './task-input/task-input.component';

import { MatModule } from '../mat/mat.module';
import { StoreModule } from '@ngrx/store';
import * as fromMain from '../redux/task-app-general.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TaskAppGeneralEffects } from '../redux/task-app-general.effects';


@NgModule({
  declarations: [
    TaskAppGeneralComponent,
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
    EffectsModule.forFeature([TaskAppGeneralEffects]),
  ],
  exports: [
    TaskAppGeneralComponent,
  ]
})
export class TaskAppGeneralModule {}
