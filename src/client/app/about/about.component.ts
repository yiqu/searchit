import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

/**
 * This class represents the AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent { 
  refinedSearch: boolean = true;
  viewDetails: boolean = true;
  toDoAuth: boolean = false;
  toDoSaveSearch: boolean = false;
  toDoUserDetail: boolean = false;
  slideValue: number = 40;
  // Set from seed.config.ts
  lastBuiltDate: string = '<%= LAST_BUILT_DATE %>';


  /**
   * Creates an instance of the AboutComponent with the injected
   * MdDialog as required by Material for dialogs
   *
   * @param {MdDialog} dialog - instance of dialog for Material
   * 
   */
  constructor(public dialog: MdDialog){}


  /**
   * Method to calculate the slider bar percentage and movements
   *
   * @param {string} box - checkbox name that was checked or unchecked
   * 
   */
  checkBox(box: string) {
    switch (box) {
    case "toDoAuth":
      this.slideValue = this.slideValue + (this.toDoAuth === true ? 20 : -20);
      break;
    case "toDoSaveSearch":
      this.slideValue = this.slideValue + (this.toDoSaveSearch === true ? 20 : -20);
      break;
    case "toDoUserDetail":
      this.slideValue = this.slideValue + (this.toDoUserDetail === true ? 20 : -20);
      break;
    } 
  }


  /**
   * Method to pop up the dialog box when user clicks Subscribe button
   * 
   */
  subscribeMailingList() {
    this.dialog.open(EmailSubscribDialog);
  }
}


/**
 * Component needed by Material to use dialogs
 * 
 */
@Component({
  moduleId: module.id,
  selector: 'email-subscribe-dialog',
  template: `
    <div>Subscribed!</div>
  `
})
export class EmailSubscribDialog {}