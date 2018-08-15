import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UserAuthService } from '../../service/user-auth.service';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-toolbar',
  providers: [ UserAuthService ],
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  toolbarTitle: string = "Github Search";
  userInfo: User;

  constructor(private uas: UserAuthService, private ts: Title) {
  }

  /**
   * On toolbar init
   * 1) Display user login info.
   */
  ngOnInit() {
    this.uas.getUser().subscribe(
      (res: HttpResponse<User>) => {
        this.userInfo = res.body;
      },
      (error) => {
        console.log("error")
        this.ts.setTitle(environment.pageTitle);
      },
      () => {
        console.log("done");
        this.ts.setTitle(this.userInfo.userName + environment.pageTitle);
      }
    )
  }
}