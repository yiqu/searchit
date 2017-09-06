import { Component } from '@angular/core';


/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent { 
  // List of buttons on Nav
  private menuButtons : string[];

  // Buttons content
  private search : string = "search";
  private about : string = "about";

  /**
   * Constructor
   * 
   */
  constructor() {
    this.menuButtons = new Array();
    this.menuButtons.push(this.search, this.about);
  }  
}

