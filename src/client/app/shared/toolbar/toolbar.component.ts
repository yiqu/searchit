import { Component } from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent { 
  // List of buttons on Nav
  private menuButtons: string[];

  // Buttons content
  private people: string = "people";
  private about: string = "about";

  // Auth info.. 
  // TODO: move to constants
  appClientAuthUrl: string = "https://github.com/login/oauth/authorize";
  appClientId: string = "c055508568ad000f32a7";
  appClientSecret: string = "af4eebfbf217c3cfbd6930ab96ab358df4468f8e";

  constructor() {
    this.menuButtons = new Array();
    this.menuButtons.push(this.people, this.about);
  }  

  login() {
    // generate unguessable string to pass to auth page
    let randomString = this.getRandomString();
    localStorage.setItem('currentUser', JSON.stringify({state: randomString}));
    this.redirectToGithubAuth(randomString);
  }

  redirectToGithubAuth(randString: string) {
    let redirectUrl = this.appClientAuthUrl + "?client_id=" + this.appClientId
    + "&state=" + randString + "&scope=user%20public_repo%20user:follow%20read:org";
    window.location.href = redirectUrl;
    //console.log(redirectUrl);
  }

  getRandomString() {
    return (0|Math.random()*9e6).toString(36);
  }
}

