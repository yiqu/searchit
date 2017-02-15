import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MetaModule } from '../meta/meta.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GithubUsersService } from '../shared/name-list/github-users.service';
import { PlaceHolderPipe, ViewValuePipe } from '../shared/pipes/search-view-value.pipe';

/**
 * Module for displaying people and search results
 * SharedModule is imported which will bring in MaterialModule
 */
@NgModule({
  imports: [CommonModule, HomeRoutingModule, MetaModule, SharedModule],
  declarations: [HomeComponent, PlaceHolderPipe, ViewValuePipe],
  exports: [HomeComponent],
  providers: [GithubUsersService]
})
export class HomeModule { }
