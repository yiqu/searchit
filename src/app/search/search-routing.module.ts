import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchHomeComponent } from './search.component';
import { ProjectSearchComponent } from './projects/projects.component';
import { UserSearchComponent } from './users/users.component';
import { GistSearchComponent } from './gists/gists.component';
import { SearchLandingComponent } from './landing/search-landing.component';
import { FeedbackComponent } from '../shared/feedback/feedback.component';

/**
 * Ths routing module, which display its content to search.component.html's <router-outlet>
 */
const searchRoutes: Routes = [
  {
    path: '',
    component: SearchHomeComponent,
    data: {
      pageTitle: 'Search Home'
    },
    children: [
      {
        path: 'projects',
        component: ProjectSearchComponent,
        data: {
          pageTitle: 'Search Projects'
        }
      },
      {
        path: 'users',
        component: UserSearchComponent,
        data: {
          pageTitle: 'Search Users'
        }
      },
      {
        path: 'gists',
        component: GistSearchComponent,
        data: {
          pageTitle: 'Search Gists'
        }
      },
      {
        path: '',
        component: SearchLandingComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    //CrisisDetailResolver
  ]
})
export class SearchRoutingModule { }