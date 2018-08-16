import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModules } from '../../shared-modules/material/material.module';
import { UserMenuModule } from './user-menu/user-menu.module';

@NgModule({
  imports: [
    MaterialModules,
    RouterModule,
    UserMenuModule
  ],

  exports: [
    ToolbarComponent
  ],

  declarations: [
    ToolbarComponent
  ],

  providers: [],
})
export class ToolbarModule { }
