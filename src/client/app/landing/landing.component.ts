import { Component, OnInit } from '@angular/core';
import { GithubUser } from '../shared/models/github-user.model';
import { Searchable } from '../shared/models/github-search.model'
import { GithubUsersService } from '../shared/services/github-users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LinkHeader } from '../shared/models/github-pagination-header';

/**
 * Landing component class.
 * 
 */
@Component({
  moduleId: module.id,
  selector: 'sd-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css'],
})
export class LandingComponent implements OnInit {

  errorMessage: string;
  users: GithubUser[];
  userCount: number;
  searchResultCount: number = 0;
  page: LinkHeader;
  saveHistory: boolean = false;
  hideResultInfo: boolean;
  hideProgressBar: boolean = true;

  loginTypes = [
    {value: 'user', viewValue: 'Users'},
    {value: 'org', viewValue: 'Organizations'},
    {value: 'anyType', viewValue: 'All'}
  ];

  followerFilter = [
    {value: 'noFilter', viewValue: 'Any'},
    {value: '>', viewValue: 'More than'},
    {value: '<', viewValue: 'Less than'}
  ];

  /** 
   * The initital Searchable object, which holds the searchable fields. On default
   * it is empty with 10 followers.
   */
  search: Searchable = {
    login: '', 
    type: this.loginTypes[0].value, 
    followerFilter: this.followerFilter[0].value, 
    followers: 10
  };

  /**
   * Creates an instance of the LandingComponent with the injected
   * GithubUsersService, ActivatedRoute, and Router
   * 
   * @param {GithubUsersService} userService - injected GithubUsersService instance
   * @param {Router} router - injected Router instance
   * 
   */
  constructor(public userService: GithubUsersService, private router: Router){}


  /**
   * Fill in the fields on page load. This will keep the last searched information.
   */
  ngOnInit(): void {
    this.search.login = this.userService.cache.searchTerm;
    this.search.type = this.userService.cache.searchTermType;
    this.search.followerFilter = this.userService.cache.searchTermFollowerFilter;
    this.search.followers = this.userService.cache.searchTermFollowerCount;
    this.users = this.userService.cache.searchResult;
    // users count for current page
    this.userCount = this.userService.cache.userDisplayCount;
    // total users total from the query
    this.searchResultCount = this.userService.cache.userTotalCount;
    this.hideResultInfo = this.userService.hideResultInfo;
    if(this.userService.pagination) {
      this.page = this.userService.pagination;
    }
  }


  /**
   * Constructs a URL route for user's detail
   * 
   * @param {GithubUser} selectedUser - github user to search for
   * 
   */
  onUserSelect(selectedUser: GithubUser): void {
    // constructs a URL of /search/yiqu
    this.router.navigate(['/search', selectedUser.login]);
  }


  /**
   * Send the values from the form to GithubUsersService for the GET call
   */
  onSearchSubmit(): void {
    // set the cache so we don't lose it when coming back to the page
    this.userService.cache.searchTermType = this.search.type;
    this.userService.cache.searchTermFollowerCount = this.search.followers;
    this.userService.cache.searchTermFollowerFilter = this.search.followerFilter;
    this.hideProgressBar = false;

    // if user didnt select a number of followers and the filter is shown, then set it to 0 as default
    if (this.search.followerFilter !== "noFilter" && this.search.followers == null) {
      this.search.followers = 0;
    }
    // start subscribe
    this.userService.search(this.search.login, this.search.type, 
      this.search.followerFilter, this.search.followers).subscribe(
      res => {
        this.users = <GithubUser[]>res.json().items;
        this.searchResultCount = res.json().total_count;
      },
      error => {
        this.hideProgressBar = true;
        this.errorMessage = <any>error;
      },
      () => {
        this.hideResultInfo = false;
        this.userService.hideResultInfo = this.hideResultInfo;
        this.userCount = this.users.length;
        this.page = this.userService.pagination;
        this.errorMessage = null;
        this.hideProgressBar = true;
      });
  }


  /**
   * Page navigation send to GithubUsersService.
   * Possible directions are: Prev, Next, First and Last.
   * 
   * @param {string} direction - pagination direction
   * 
   */
  onPageSelect(direction: string): void {
    let url: string = this.userService.pagination[direction]
    // regex to grab the page number out of the URL
    let matches = url.match(/\d+$/);
    // show progress bar
    this.hideProgressBar = false;
    if (matches) {
      this.userService.currentPageNumber = +matches[0];
    }
    this.userService.pageNavigation(this.userService.pagination[direction]).subscribe(
      res => {
        this.users = <GithubUser[]>res.json().items;
        this.searchResultCount = res.json().total_count;
      },
      error => {
        this.errorMessage = <any>error;
        this.hideProgressBar = true;
      },
      () => {
        this.userCount = this.users.length;
        this.page = this.userService.pagination;
        this.errorMessage = null;
        this.hideProgressBar = true;
      });
  }


  /**
   * Return true if key is a number, false otherwise.
   * 
   * @param {any} event - key press event
   * @return {boolean} true if event's key press is a number
   */
  onlyNumberKey(event: any): boolean {
      return (event.charCode == 8 || event.charCode == 0) ? 
        null : event.charCode >= 48 && event.charCode <= 57;
  }
  
}
