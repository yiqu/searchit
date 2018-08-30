import { NgModule } from '@angular/core';
import { SearchHomeComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { ProjectSearchModule } from './projects/projects.module';
import { UserSearchModule } from './users/users.module';
import { GistSearchModule } from './gists/gists.module';
/**
 * Landing Component Module
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectSearchModule,
    UserSearchModule,
    GistSearchModule,
    SearchRoutingModule
  ],

  exports: [
  ],

  declarations: [
    SearchHomeComponent
  ],

  providers: [],
})
export class SearchModule { }