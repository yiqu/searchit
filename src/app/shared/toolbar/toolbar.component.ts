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
  menuYPosition: string = "below";
  menuOverlap: boolean = false;

  /**
   * Constructor 
   * @param uas injected UserAuthService
   * @param ts 
   */
  constructor(private uas: UserAuthService, private ts: Title) {
  }

  /**
   * On toolbar init
   */
  ngOnInit() {
  }

}