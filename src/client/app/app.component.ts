import { Component , OnInit } from '@angular/core';
import { Config } from './shared/config/env.config';
import { GithubUsersService } from './shared/name-list/github-users.service';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit{

  constructor(private service: GithubUsersService) {
    console.log('Environment config', Config);
  }

  ngOnInit() {
    let urlWithParams = window.location.href
    let cleanedUpUrlWithParams = urlWithParams.substring(0, urlWithParams.indexOf('#'));
    this.service.redirectedUrlWithCodeAndState = cleanedUpUrlWithParams;
  }
}
