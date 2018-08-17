import { Component, OnInit, Input, OnChanges, SimpleChange, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material';
import { User } from '../../../models/user/user.model';
import { UserAuthService } from '../../../service/user-auth.service';
import * as BTexts from '../../../shared/display-texts/texts';

@Component({
  selector: 'toolbar-user-menu',
  templateUrl: 'user-menu.component.html',
  styleUrls: ['user-menu.component.css']
})

export class UserMenuComponent implements OnChanges {

  // Menu option for Y position
  @Input() menuYPosition: string;
  // Menu option for overlap
  @Input() menuOverlap: boolean;

  @ViewChild('userMenu') 
  menu: MatMenu;

  userName: string;
  userEmail: string;
  Btext: any = BTexts;

  /**
   * Constructor
   */
  constructor(public uas: UserAuthService) {
    console.log(this.uas.userInfo);
  }

  /**
   * On changes
   * @param changes 
   */
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) { 
  }

  /**
   * Toggle user log in
   */
  userLoginToggle(): void {
    this.uas.toggleUserLogin();
  }
}