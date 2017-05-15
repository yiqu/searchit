import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AboutModule } from './about/about.module';
import { LandingModule } from './landing/landing.module';
import { SharedModule } from './shared/shared.module';
import { UserDetailModule } from './user-detail/user-detail.module'

@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    HttpModule, 
    MaterialModule,
    AppRoutingModule, 
    AboutModule, 
    LandingModule, 
    SharedModule.forRoot(), 
    UserDetailModule
  ],

  declarations: [
    AppComponent
  ],

  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
