import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './404.component';


/**
 * Module for 404 component. 
 * 
 */
@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    NotFoundComponent
  ],

  exports: [
    NotFoundComponent
  ],

  providers: []
})
export class NotFoundModule { }
