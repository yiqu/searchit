import { NgModule } from '@angular/core';
import { MaterialModules } from '../../../shared-modules/material/material.module';
import { UserMenuComponent } from './user-menu.component';

@NgModule({
  imports: [
    MaterialModules
  ],

  exports: [
    UserMenuComponent
  ],

  declarations: [
    UserMenuComponent
  ]
})
export class UserMenuModule { }
