import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskInputComponent } from './task-input/task-input.component';

import { MatModule } from '../mat/mat.module';


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
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
