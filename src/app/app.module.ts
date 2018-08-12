import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarModule } from './shared/toolbar/toolbar.module';


/**
 * Main app module
 */
@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule
  ],

  providers: [
    // Title service, updates document title dynamically
    Title
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
