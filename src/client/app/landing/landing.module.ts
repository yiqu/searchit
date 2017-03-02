import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { MetaModule } from '../meta/meta.module';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GithubUsersService } from '../shared/services/github-users.service';
import { PlaceHolderPipe, ViewValuePipe } from '../shared/pipes/search-view-value.pipe';

/**
 * Module for landing page. 
 * 
 * Imports:
 * CommonModule - Angular/CommonModule
 * LandingRoutingModule - this routing module
 * MetaModule - 
 * SharedModule - Shared components
 * 
 * Note: SharedModule is imported which will bring in MaterialModule.
 */
@NgModule({
  imports: [CommonModule, LandingRoutingModule, MetaModule, SharedModule],
  declarations: [LandingComponent, PlaceHolderPipe, ViewValuePipe],
  exports: [LandingComponent],
  providers: [GithubUsersService]
})
export class LandingModule { }
