import { Component, OnInit } from '@angular/core';
import { GithubUser } from '../shared/models/github-user.model';
import { Searchable } from '../shared/models/github-search.model'
import { GithubUsersService } from '../shared/services/github-users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LinkHeader } from '../shared/models/github-pagination-header';

/**
 * Landing component class 
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

  search: Searchable = {login: '', type: this.loginTypes[0].value, 
    followerFilter: this.followerFilter[0].value, followers: 10};

  /**
   * Creates an instance of the LandingComponent with the injected
   * GithubUsersService, ActivatedRoute, and Router
   */
  constructor(public usersService: GithubUsersService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Get all users OnInit
   */
  ngOnInit(): void {
    this.search.login = this.usersService.cache.searchTerm;
    this.search.type = this.usersService.cache.searchTermType;
    this.search.followerFilter = this.usersService.cache.searchTermFollowerFilter;
    this.search.followers = this.usersService.cache.searchTermFollowerCount;
    this.users = this.usersService.cache.searchResult;
    // users count for current page
    this.userCount = this.usersService.cache.userDisplayCount;
    // total users total from the query
    this.searchResultCount = this.usersService.cache.userTotalCount;
    this.hideResultInfo = this.usersService.hideResultInfo;
    if(this.usersService.pagination) {
      this.page = this.usersService.pagination;
    }
  }


  /**
   * Constructs a URL route for user's detail
   */
  onUserSelect(selectedUser: GithubUser): void {
    // constructs a URL of /search/mojombo
    this.router.navigate(['/search', selectedUser.login]);
  }

  onSearchSubmit(): void {
    // set the cache so we don't lose it when coming back to the page
    this.usersService.cache.searchTermType = this.search.type;
    this.usersService.cache.searchTermFollowerCount = this.search.followers;
    this.usersService.cache.searchTermFollowerFilter = this.search.followerFilter;
    this.hideProgressBar = false;
    // start subscribe
    this.usersService.search(this.search.login, this.search.type, 
      this.search.followerFilter, this.search.followers).subscribe(
      res => {
        this.users = <GithubUser[]>res.json().items;
        this.searchResultCount = res.json().total_count;
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        this.hideResultInfo = false;
        this.usersService.hideResultInfo = this.hideResultInfo;
        this.userCount = this.users.length;
        this.page = this.usersService.pagination;
        this.errorMessage = null;
        this.hideProgressBar = true;
      });
  }

  onPageSelect(direction: string): void {
    let url: string = this.usersService.pagination[direction],
        matches = url.match(/\d+$/);
    // show progress bar
    this.hideProgressBar = false;
    if (matches) {
      this.usersService.currentPageNumber = +matches[0];
    }
    this.usersService.pageNavigation(this.usersService.pagination[direction]).subscribe(
      res => {
        this.users = <GithubUser[]>res.json().items;
        this.searchResultCount = res.json().total_count;
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        this.userCount = this.users.length;
        this.page = this.usersService.pagination;
        this.errorMessage = null;
        this.hideProgressBar = true;
      });
  }

  onlyNumberKey(event: any): boolean {
      return (event.charCode == 8 || event.charCode == 0) ? 
        null : event.charCode >= 48 && event.charCode <= 57;
  }
  
}
