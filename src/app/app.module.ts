import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { LandingModule } from './landing/landing.module';
import { SearchModule } from './search/search.module';
import { ToolbarModule } from './shared/toolbar/toolbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NotFoundModule } from './404/404.module';

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
    SearchModule,
    ToolbarModule,
    FooterModule,
    NotFoundModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
