import { NgModule } from '@angular/core';
import { ProjectSearchComponent } from './projects.component';
import { RightPanelModule } from '../right-panel/right-panel.module';

@NgModule({
  declarations: [
    ProjectSearchComponent
  ],

  imports: [
    RightPanelModule
  ],
  
  exports: [
  ],
  
  providers: [],
})
export class ProjectSearchModule { }
