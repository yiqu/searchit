import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UserAuthService } from '../../service/user-auth.service';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user/user.model';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { NavItem } from '../nav-item.model';


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
  menuYPosition: string = "below";
  menuOverlap: boolean = false;

  toolbarNavItems: NavItem[];

  /**
   * Constructor 
   * @param uas injected UserAuthService
   * @param ts 
   */
  constructor(public uas: UserAuthService, private ts: Title) {
    let projects = new NavItem(["search", "projects"], "active", "Projects");
    let users = new NavItem(["search", "users"], "active", "Users");
    let gists = new NavItem(["search", "gists"], "active", "Gists");
    this.toolbarNavItems = [projects, users, gists];
  }

  /**
   * On toolbar init
   */
  ngOnInit() {
  }

}