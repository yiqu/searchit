import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SearchHomeComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { ProjectSearchModule } from './projects/projects.module';
import { UserSearchModule } from './users/users.module';
import { GistSearchModule } from './gists/gists.module';
import { TitleService } from '../service/title.service'
import { SearchLandingModule } from './landing/search-landing.module';
import { FeedbackComponent } from './feedback/feedback.component';

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
    SearchLandingModule,
    SearchRoutingModule
  ],

  exports: [
    FeedbackComponent,
    SearchHomeComponent
  ],

  declarations: [
    SearchHomeComponent,
    FeedbackComponent
  ],

  providers: [
    TitleService,
    Title
  ],
})
export class SearchModule { }