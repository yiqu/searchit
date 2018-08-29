import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { LandingComponent } from './search/landing.component';

 //Routes for app.
const routes: Routes = [
  {
    path: 'search',
    component: LandingComponent
  },
  //{
   // path: 'about', // Lazy loaded
   // loadChildren: './about/about.module#AboutModule'
  //},
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