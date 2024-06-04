import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: SingleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
