import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './404/404.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
  
    exports: [
        RouterModule
    ],
  
    declarations: []
})
export class AppRoutingModule { }
