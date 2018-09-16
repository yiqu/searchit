import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RightPanelComponent } from './right-panel.component';

@NgModule({
  imports: [
    RouterModule,
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
