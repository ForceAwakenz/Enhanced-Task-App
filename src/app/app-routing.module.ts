import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DockTestSortComponent } from './main/dock-test-sort/dock-test-sort.component';
import { DockTestComponent } from './main/dock-test/dock-test.component';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'test', component: DockTestComponent},
  { path: 'sort-test', component: DockTestSortComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
