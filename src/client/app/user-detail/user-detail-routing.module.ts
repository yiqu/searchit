import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';


const userDetailRoutes: Routes = [
    // Path will match search/yiqu
    { path: 'search/:login', component: UserDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(userDetailRoutes)
  ],
  exports: [RouterModule]
})
export class UserDetailRoutingModule { }
