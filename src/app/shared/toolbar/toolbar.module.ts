import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModules } from '../../shared-modules/material/material.module';

@NgModule({
  imports: [
    MaterialModules
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
