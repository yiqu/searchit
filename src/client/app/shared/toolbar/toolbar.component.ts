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
  private menuButtons : string[];

  // Buttons content
  private people : string = "people";
  private about : string = "about";

  constructor() {
    this.menuButtons = new Array();
    this.menuButtons.push(this.people, this.about);
  }  
}

