import { NgModule } from '@angular/core';
import { MaterialModules } from '../../../shared-modules/material/material.module';
import { UserMenuComponent } from './user-menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModules
  ],

  exports: [
    CommonModule,
    UserMenuComponent
  ],

  declarations: [
    UserMenuComponent
  ]
})
export class UserMenuModule { }
