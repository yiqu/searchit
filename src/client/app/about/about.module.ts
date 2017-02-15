import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent, EmailSubscribDialog } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, SharedModule],
  // declare the dialog component!
  declarations: [AboutComponent, EmailSubscribDialog],
  exports: [AboutComponent],
  // need to add to entry for dialog to work
  entryComponents: [EmailSubscribDialog]
})
export class AboutModule { }
