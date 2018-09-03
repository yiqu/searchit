import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModules } from '../../shared-modules/material/material.module';
import { UserMenuModule } from './user-menu/user-menu.module';
import { TitleService } from '../../service/title.service';

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

  providers: [
    TitleService
  ],
})
export class ToolbarModule { }
