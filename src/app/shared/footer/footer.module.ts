import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';


@NgModule({
  imports: [
    CommonModule,
  ],

  exports: [
    FooterComponent
  ],

  declarations: [
    FooterComponent
  ],

  providers: [],
})
export class FooterModule { }
