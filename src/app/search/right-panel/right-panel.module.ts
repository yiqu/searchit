import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackModule } from '../../shared/feedback/feedback.module';
import { RightPanelComponent } from './right-panel.component';

@NgModule({
  imports: [
    RouterModule,
    FeedbackModule
  ],

  exports: [
    RightPanelComponent
  ],

  declarations: [
    RightPanelComponent
  ],
  
  providers: [],
})
export class RightPanelModule { }
