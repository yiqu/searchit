import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdToolbarModule,
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
