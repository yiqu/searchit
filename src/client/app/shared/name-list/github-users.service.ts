import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GithubUser } from '../models/github-user.model'
import { SearchCacheable } from '../models/search-cache';
import { LinkHeader } from '../models/github-link-header';
import { Searchable } from '../models/github-search.model'
//import { Subject} from 'rxjs/Rx';

/**
 * This singleton service provides the Github users service. 
 */
@Injectable()
export class GithubUsersService {

  // The base URL for github API
  private githubBaseApi: string = "https://api.github.com";
  // tmp object for holding pagination urls
  private tmpLinkObject: Object; 
  // object for holding SearchForm's values. Prevent form values being erased after
  // viewing another component
  public cache: SearchCacheable = new SearchCacheable([], "");
  // LinkHeader object for holding pagination urls
  public pagination: LinkHeader;
  // values used to display Page current of total.
  public lastPageNumber: number;
  public currentPageNumber: number;

  public hideResultInfo: boolean = true;
  /**
   * Constructor to create a new GithubUsersService with the injected Http.
   * 
   * @param {Http} http - injected http component
   */
  constructor(private http: Http) {
  }

  /**
   * Creates an Observable to make http request for a user's details
   * 
   * @param {string} login - the user's login name
   * @return {Response} res - a user's detail
   */
  getUserDetail(login: string): Observable<any> {
    return this.http.get(this.githubBaseApi + '/users' + '/' + login)
        .map((res: Response) => {
            return <Response>res;
        }).catch(this.handleError);
  }

  /**
   * Creates an Observable to make http request for search
   *
   * @param {string} login - the user's login name
   * @param {string}
   * @param {string}
   * @param {number}
   * 
   * @return {Response} res - array of users 
   */
  search(login: string, searchType: string, searchFilter: string, followers: number): Observable<any> {
    // any amount of followers: /search/users?q=tom+in:login+type:user
    let searchTypeParam: string = searchType === "anyType" ? "" : "+type:" + searchType;
    let followerFilter: string = searchFilter === "noFilter" ? "" : "+followers:" + searchFilter + followers;

    return this.http.get(this.githubBaseApi + '/search/users' + '?q=' + login + '+in:login' 
        + searchTypeParam + followerFilter)
            .map((res: Response) => {
                this.cache.searchTerm = login;
                this.cache.searchResult = <GithubUser[]>res.json().items;
                this.cache.userDisplayCount = res.json().items.length;
                this.cache.userTotalCount = res.json().total_count;
                if(res.headers.get('Link') !== null){
                    this.tmpLinkObject =  this.parse_link_header(res.headers.get('Link'));
                    this.pagination = new LinkHeader(this.tmpLinkObject);
                    this.lastPageNumber = this.pagination["last"]===undefined?0:+this.pagination["last"].match(/\d+$/)[0];
                    //console.log(this.lastPageNumber);
                    this.currentPageNumber = 1;
                } else {
                    this.pagination = null;
                }
                return <Response>res;
        }).catch(this.handleError);
    }

  /**
   * Creates an Observable for navigating pagination. The url is passed in based on the direction
   * of pagination.
   *
   * @param {string} url - full url string to call
   * @return {Response} res - array of users 
   */
  pageNavigation(url: string): Observable<any> {
    return this.http.get(url)
        .map((res: Response) => {
    
            this.cache.searchResult = <GithubUser[]>res.json().items;
            this.cache.userDisplayCount = this.cache.searchResult.length;
            this.cache.userTotalCount = res.json().total_count;    

            this.tmpLinkObject =  this.parse_link_header(res.headers.get('Link'));
            this.pagination.setLinks(this.tmpLinkObject);

            return <Response>res;
        }).catch(this.handleError);
  }

  /**
   * Handle HTTP error
   * 
   * @param {any} error - error
   * @return {Observable} any - error message 
   */
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


  /**
   * Creates an object 
   * 
   * @param {string} header - header link string that contains next, prev, first and last urls
   * @return {Object} links - The object with pagination information.
   */
  parse_link_header(header: string) {
    if (header.length === 0) {
        throw new Error("input must not be of zero length");
    }
    // Split parts by comma
    let parts = header.split(',');
    let links:any = {};
    // Parse each part into a named link
    for(let i=0; i<parts.length; i++) {
        let section = parts[i].split(';');
        if (section.length !== 2) {
            throw new Error("section could not be split on ';'");
        }
        let url = section[0].replace(/<(.*)>/, '$1').trim();
        let name = section[1].replace(/rel="(.*)"/, '$1').trim();
        links[name] = url;
    }
    return links;
  }
}

