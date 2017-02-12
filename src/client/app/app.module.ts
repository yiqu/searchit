import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { UserDetailModule } from './user-detail/user-detail.module';
import { SelfDetailModule } from './self-detail/self-detail.module';
import { GithubUsersService } from './shared/name-list/github-users.service';

@NgModule({
  imports: [BrowserModule, HttpModule, MaterialModule.forRoot(),
    AppRoutingModule, AboutModule, HomeModule, SharedModule.forRoot(), 
    UserDetailModule, SelfDetailModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, GithubUsersService],
  bootstrap: [AppComponent]

})
export class AppModule { }
