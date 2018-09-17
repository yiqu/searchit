import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    FooterComponent
  ],
  
  providers: [],
})
export class FooterModule { }
