import { NgModule } from '@angular/core';
import { SearchLandingComponent } from './search-landing.component';
import { CapitalizeFirst } from '../../shared/pipes/capitalize-first.pipe';

@NgModule({
  declarations: [
    SearchLandingComponent,
    CapitalizeFirst
  ],

  imports: [
  ],
  
  exports: [
  ],
  
  providers: [],
})
export class SearchLandingModule { }
