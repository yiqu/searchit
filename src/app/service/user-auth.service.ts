import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { catchError, take, retry, tap } from 'rxjs/operators';
import { ApiService } from './base-api.service';
import { User } from '../models/user/user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class UserAuthService {

  public userInfo: User = new User();
  public userLoggedIn: boolean = false;
  public userLogInToggleButtonText: string;
  public defaultTitle: string = "";

  /**
   * Constructor
   * @param http 
   */
  constructor(private as: ApiService, private ts: Title) {
    if (this.userLoggedIn) {
      this.userLogInToggleButtonText = "Log out";
    } else {
      this.userLogInToggleButtonText = "Log in";
    }
    this.updatePageTitle(this.userInfo);
  }

  /**
   * Create an obs for current user info
   * @returns Observable
   */
  public getUser (): Observable<HttpResponse<User>> {
    return this.as.get("/user/login.json");
  }

  /**
   * Toggle log in / out
   * @param loggedIn 
   */
  public toggleUserLogin() {
    if (this.userLoggedIn) {
      this.logOutUser();
    } else {
      this.logInUser();
    }
  }

  /**
   * Log in a user
   */
  private logInUser() {
    this.userLogInToggleButtonText = "Logging in...";
    this.getUser().subscribe(
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

  private logOutUser() {
    this.setUserLoggedIn(false);
    this.setUserAccount(new User());
    this.updatePageTitle(this.userInfo);
  }

  public setUserAccount(user: User): void {
    this.userInfo = user;
  }

  public updatePageTitle(user?: User): void {
    this.ts.setTitle(user.userName + environment.pageTitle);
    this.defaultTitle = this.ts.getTitle();
  }

  public setUserLoggedIn(logged: boolean): void {
    this.userLoggedIn = logged;
    this.userLogInToggleButtonText = 
      this.userLoggedIn ? "Log out" : "Log in";
  }

}