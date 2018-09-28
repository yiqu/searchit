import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from '../shared-modules/material/material.module';
import { AboutComponent } from './about.component';

@NgModule({
  
  imports: [
    CommonModule,
    MaterialModules
  ],

  exports: [],

  declarations: [
    AboutComponent
  ],

  providers: [],
})
export class AboutModule { }
