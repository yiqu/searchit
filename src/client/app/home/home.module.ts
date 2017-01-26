import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GithubUsersService } from '../shared/name-list/github-users.service';

/**
 * Module for displaying people and search results
 * SharedModule is imported which will bring in MaterialModule
 */
@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [GithubUsersService]
})
export class HomeModule { }
