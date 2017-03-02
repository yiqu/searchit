import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';

/**
 * Routing module for Landing component. Route for this module are: / 
 * 
 */
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'search', component: LandingComponent },
      { path: '', component: LandingComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
