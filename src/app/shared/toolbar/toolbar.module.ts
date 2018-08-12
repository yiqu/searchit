import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModules } from '../../shared-modules/material/material.module';

@NgModule({
  imports: [
    MaterialModules,
    RouterModule
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
