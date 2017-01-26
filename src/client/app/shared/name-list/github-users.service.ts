import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GithubUser } from '../models/github-user.model'
import { SearchCacheable } from '../models/search-cache';

/**
 * This singleton service provides the Github users service. 
 */
@Injectable()
export class GithubUsersService {

  // The base URL for github API
  private githubBaseApi: string = "https://api.github.com";

  cache: SearchCacheable = new SearchCacheable();

  /**
   * Creates a new GithubUsersService with the injected Http.
   */
  constructor(private http: Http) {
    this.cache.searchResult = [];
    this.cache.searchTerm = "";
    this.cache.userDisplayCount = 0;
    this.cache.userTotalCount = 0;
  }

  /**
   * Returns an Observable for user details.
   */
  getUserDetail(login: string): Observable<any> {
    return this.http.get(this.githubBaseApi + '/users' + '/' + login)
        .map((res: Response) => {
            return <any>res;
        }).catch(this.handleError);
  }

  /**
   * Returns an Observable for users
   */
  searchUserByLogin(login: string): Observable<any> {
    return this.http.get(this.githubBaseApi + '/search/users' + '?q=' + login + '+in:login' + '+type:user')
        .map((res: Response) => {
            this.cache.searchTerm = login;
            this.cache.searchResult = <GithubUser[]>res.json().items;
            this.cache.userDisplayCount = res.json().items.length;
            this.cache.userTotalCount = res.json().total_count;
            return <any>res;
        }).catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

