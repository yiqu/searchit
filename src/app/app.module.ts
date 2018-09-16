import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from './service/base-api.service';
import { UserAuthService } from './service/user-auth.service';
import { SearchModule } from './search/search.module';
import { AboutModule } from './about/about.module';
import { ToolbarModule } from './shared/toolbar/toolbar.module';
import { NotFoundModule } from './404/404.module'
import { FooterModule } from './footer/footer.module';

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
    AboutModule,
    ToolbarModule,
    NotFoundModule,
    FooterModule,
    SearchModule,
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
