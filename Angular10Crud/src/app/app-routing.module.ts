import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { AddTutorialsComponent } from './components/add-tutorials/add-tutorials.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialListComponent },
  { path: 'add', component: AddTutorialsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
