import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404/404.component';


 //Root routes for app
const routes: Routes = [
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule',
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