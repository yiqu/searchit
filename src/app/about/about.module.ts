import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';


/**
 * Module for About page. 
 * 
 */
@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    AboutComponent
  ],

  exports: [
    AboutComponent
  ],

  providers: [
  ]
})
export class AboutModule { }
