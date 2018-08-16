import { Component, OnInit, Input, OnChanges, SimpleChange, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material';
import { User } from '../../../models/user/user.model';

@Component({
  selector: 'toolbar-user-menu',
  templateUrl: 'user-menu.component.html',
  styleUrls: ['user-menu.component.css']
})

export class UserMenuComponent implements OnChanges {

  @Input()
  menuYPosition: string;

  @Input()
  menuOverlap: boolean;

  @Input()
  userInfo: User;

  @ViewChild('userMenu') 
  menu: MatMenu;

  /**
   * Constructor
   */
  constructor() {}

  /**
   * On changes
   * @param changes 
   */
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) { 
    console.log("changes: ",changes)
    console.log(this.userInfo)
  }

}