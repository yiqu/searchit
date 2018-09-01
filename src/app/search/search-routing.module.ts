import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchHomeComponent } from './search.component';
import { ProjectSearchComponent } from './projects/projects.component';
import { UserSearchComponent } from './users/users.component';
import { GistSearchComponent } from './gists/gists.component';

/**
 * Ths routing module, which display its content to search.component.html's <router-outlet>
 */
const searchRoutes: Routes = [
  {
    path: '',
    component: SearchHomeComponent,
    data: {
      pageTitle: 'Search'
    },
    children: [
      {
        path: 'projects',
        component: ProjectSearchComponent,
        data: {
          pageTitle: 'Projects'
        }
      },
      {
        path: 'users',
        component: UserSearchComponent,
        data: {
          pageTitle: 'Users'
        }
      },
      {
        path: 'gists',
        component: GistSearchComponent,
        data: {
          pageTitle: 'Gists'
        }
      },
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