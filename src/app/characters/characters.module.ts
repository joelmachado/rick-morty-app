import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    SingleComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    FormsModule
  ]
})
export class CharactersModule  { }
