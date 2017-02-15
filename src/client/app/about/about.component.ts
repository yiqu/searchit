import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

/**
 * This class represents the lazy loaded AboutComponent.
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

  constructor(public dialog: MdDialog){}

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

  subscribe() {
    this.dialog.open(EmailSubscribDialog);
  }
}



@Component({
  moduleId: module.id,
  selector: 'email-subscribe-dialog',
  template: `
    <div>Subscribed!</div>
  `
})
export class EmailSubscribDialog {}