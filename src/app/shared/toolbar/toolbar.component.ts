import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UserAuthService } from '../../service/user-auth.service';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user/user.model';
import { UserMenuComponent } from './user-menu/user-menu.component';

@Component({
  selector: 'app-toolbar',
  providers: [ UserAuthService ],
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  @ViewChild('userMenu')
  menuComp: UserMenuComponent;

  toolbarTitle: string = "Github Search";
  userInfo: User = new User();
  menuYPosition: string = "below";
  menuOverlap: boolean = false;
  userLoggedIn: boolean = false;

  /**
   * Constructor 
   * @param uas injected UserAuthService
   * @param ts 
   */
  constructor(private uas: UserAuthService, private ts: Title) {
  }

  /**
   * On toolbar init
   * 1) Display user login info.
   */
  ngOnInit() {
    this.uas.getUser().subscribe(
      (res: HttpResponse<User>) => {
        if (res.status === 200) {
          this.setUserAccount(res.body);  
        }
      },
      (error) => {
        console.log("error")
        this.setUserLoggedIn(false);
        this.updatePageTitle(this.userInfo);
      },
      () => {
        this.setUserLoggedIn(true);
        this.updatePageTitle(this.userInfo);
      }
    )
  }

  setUserAccount(user: User): void {
    this.userInfo = user;
  }

  updatePageTitle(user?: User): void {
    this.ts.setTitle(this.userInfo.userName + environment.pageTitle);
  }

  setUserLoggedIn(logged: boolean): void {
    this.userLoggedIn = logged;
  }

}