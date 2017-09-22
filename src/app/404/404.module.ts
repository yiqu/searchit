import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './404.component';


/**
 * Module for About page. 
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

  providers: [
  ]
})
export class NotFoundModule { }
