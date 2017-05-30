import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    MaterialModule
  ],

  declarations: [
    ToolbarComponent
  ],

  exports: [
    ToolbarComponent, 
    MaterialModule,
    CommonModule, 
    FormsModule, 
    RouterModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
