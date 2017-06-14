import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubUsersService } from '../shared/services/github-users.service';
import { UserDetailComponent } from './user-detail.component'
import { UserDetailRoutingModule } from './user-detail-routing.module'
import { SharedModule } from '../shared/shared.module';

/**
 * Module for a user's details.
 * SharedModule is imported which will bring in MaterialModule
 */
@NgModule({
  imports: [
    CommonModule, 
    UserDetailRoutingModule, 
    SharedModule
  ],
  declarations: [
    UserDetailComponent
  ],
  exports: [
    UserDetailComponent
  ],
  providers: [
    GithubUsersService
  ]
})
export class UserDetailModule { }
