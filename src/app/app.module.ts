import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// App Modules
import { ToolbarModule } from './shared/toolbar/toolbar.module';
import { NotFoundModule } from './404/404.module'
import { LandingModule } from './landing/landing.module';

/**
 * Main app modules
 */
@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule,
    LandingModule,
    NotFoundModule,
    AppRoutingModule
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
