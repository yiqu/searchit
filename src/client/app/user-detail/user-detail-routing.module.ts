import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';


const userDetailRoutes: Routes = [
    { path: 'people/:login', component: UserDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(userDetailRoutes)
  ],
  exports: [RouterModule]
})
export class UserDetailRoutingModule { }
