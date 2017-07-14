import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { SearchModule } from './search/search.module';
import { LandingModule } from './landing/landing.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    AboutModule,
    AppRoutingModule,
    BrowserModule,
    LandingModule,
    SearchModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
