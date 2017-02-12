import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfDetailComponent } from './self-detail.component';


const SelfDetailRoutes: Routes = [
    { path: 'self', component: SelfDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(SelfDetailRoutes)
  ],
  exports: [RouterModule]
})
export class SelfDetailRoutingModule { }