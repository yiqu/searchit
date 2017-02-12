import { Component, Input, OnInit } from '@angular/core';
import { GithubUserDetail } from '../shared/models/github-user-detail.model'
import { GithubUsersService } from '../shared/name-list/github-users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';

/**
 * This represents a logged-in user component.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-self-detail',
    templateUrl: 'self-detail.component.html',
    styleUrls: ['self-detail.component.css'],
})

export class SelfDetailComponent implements OnInit {

  authTokenUrl: string = "https://github.com/login/oauth/access_token";
  appClientId: string = "c055508568ad000f32a7";
  appClientSecret: string = "af4eebfbf217c3cfbd6930ab96ab358df4468f8e";

  errorMessage: string;

  /**
   * 
   */
  constructor(private activatedRoute: ActivatedRoute, private service: GithubUsersService) {}

  /**
   * Grab the code and state returned by Github from the URL's query param.
   * note: use route.queryParams for ?param, route.params is :param (matrix params style)
   */
  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let stateToVerify = currentUser.state; // your state created previously

    let params = new URL(this.service.redirectedUrlWithCodeAndState).search;
    let code = this.getParameterByName('code', params);
    let state = this.getParameterByName('state', params);
    console.log(code + state);

  
    this.service.getAuthToken(this.authTokenUrl, this.appClientId, this.appClientSecret, code).subscribe(
      token => {
        console.log('token res: ' + JSON.stringify(token));
      },
      error => {
        this.errorMessage = <any> error;
      },
      () => {
        console.log('completed Auth');   
      }
    )

    
    //console.log(this.service.isUserLoggedIn);
    
  }

  getParameterByName(name: string, url: string) {
    if(name !== null && url !== null) {
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    return null;
  }

}
