import { Component, OnInit } from '@angular/core';
import { GithubUser } from '../shared/models/github-user.model';
import { Searchable } from '../shared/models/github-search.model'
import { GithubUsersService } from '../shared/name-list/github-users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LinkHeader } from '../shared/models/github-link-header';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  errorMessage: string;
  users: GithubUser[];
  userCount: number = 0;
  search: Searchable = {login: ''};
  searchResultCount: number = 0;
  page: LinkHeader;

  /**
   * Creates an instance of the HomeComponent with the injected
   * GithubUsersService, ActivatedRoute, and Router
   */
  constructor(public usersService: GithubUsersService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Get all users OnInit
   */
  ngOnInit() {
    this.search.login = this.usersService.cache.searchTerm;
    this.users = this.usersService.cache.searchResult;
    this.userCount = this.usersService.cache.userDisplayCount;
    this.searchResultCount = this.usersService.cache.userTotalCount;
    if(this.usersService.pagination) {
      this.page = this.usersService.pagination;
    }
  }


  /**
   * Constructs a URL route for user's detail
   */
  onUserSelect(selectedUser: GithubUser) {
    // constructs a URL of /people/mojombo
    this.router.navigate(['/people', selectedUser.login]);
  }

  onSearchSubmit() {
    this.usersService.searchUserByLogin(this.search.login).subscribe(
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
      });
  }

  onPageSelect(direction:string) {
    let url: string = this.usersService.pagination[direction],
        matches = url.match(/\d+$/); //get the number at the end of the url
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
      });
  }
  
}
