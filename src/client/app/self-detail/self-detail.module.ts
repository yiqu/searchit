import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubUsersService } from '../shared/name-list/github-users.service';
import { SelfDetailComponent } from './self-detail.component'
import { SelfDetailRoutingModule } from './self-detail-routing.module'
import { SharedModule } from '../shared/shared.module';

/**
 * Module for logged-in user's details.
 * SharedModule is imported which will bring in MaterialModule
 */
@NgModule({
  imports: [CommonModule, SelfDetailRoutingModule, SharedModule],
  declarations: [SelfDetailComponent],
  exports: [SelfDetailComponent],
  providers: [GithubUsersService]
})

export class SelfDetailModule { }
