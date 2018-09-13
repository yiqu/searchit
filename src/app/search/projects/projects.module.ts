import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectSearchComponent } from './projects.component';
import { RightPanelModule } from '../right-panel/right-panel.module';

@NgModule({
  declarations: [
    ProjectSearchComponent
  ],

  imports: [
    RouterModule,
    FormsModule,
    RouterModule,
    RightPanelModule
  ],
  
  exports: [
  ],
  
  providers: [],
})
export class ProjectSearchModule { }
