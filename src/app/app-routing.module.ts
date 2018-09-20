import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { FeedbackComponent } from './search/feedback/feedback.component';
import { AboutComponent } from './about/about.component';


 //Root routes for app
const routes: Routes = [
   //host.io/search(feedback:compose)
   {
    path: 'compose',
    component: FeedbackComponent,
    outlet: 'feedback'
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  { 
    path: '', 
    redirectTo: '/search', 
    pathMatch: 'full' 
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


/**
 * Routing module.
 * 
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, /*{ enableTracing: true }*/)
  ],

  exports: [
    RouterModule
  ],
  
  declarations: []
})
export class AppRoutingModule { }