import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from './service/base-api.service';
import { UserAuthService } from './service/user-auth.service';

// App Modules
import { ToolbarModule } from './shared/toolbar/toolbar.module';
import { NotFoundModule } from './404/404.module'

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
    HttpClientModule,
    ToolbarModule,
    NotFoundModule,
    // routing module always last 
    AppRoutingModule
  ],

  providers: [
    ApiService,
    Title,
    UserAuthService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
