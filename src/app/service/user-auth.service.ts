import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, take, retry, tap } from 'rxjs/operators';
import { ApiService } from './base-api.service';
import { User } from '../models/user/user.model';

@Injectable()
export class UserAuthService {

  /**
   * Constructor
   * @param http 
   */
  constructor(private as: ApiService) { 
  }

  /**
   * Create an obs for current user info
   * @returns Observable
   */
  public getUser (): Observable<User> {
    return this.as.get("/user/login.json");
  }

}