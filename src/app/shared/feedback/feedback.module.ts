import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    FeedbackComponent
  ],

  declarations: [
    FeedbackComponent
  ],

  providers: [],
})
export class FeedbackModule { }
