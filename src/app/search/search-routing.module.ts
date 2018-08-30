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
    children: [
      {
        path: 'projects',
        component: ProjectSearchComponent,
      },
      {
        path: 'users',
        component: UserSearchComponent,
      },
      {
        path: 'gists',
        component: GistSearchComponent,
      },
      //{
      //  path: '',
       // redirectTo: '1',
      //  component: CrisisDetailComponent
      //}
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