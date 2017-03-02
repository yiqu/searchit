import { Component, Input, OnInit } from '@angular/core';
import { GithubUserDetail } from '../shared/models/github-user-detail.model'
import { GithubUsersService } from '../shared/services/github-users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';

import 'rxjs/add/operator/switchMap';

/**
 * This represents a Github user's details component.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-user-detail',
    templateUrl: 'user-detail.component.html',
    styleUrls: ['user-detail.component.css'],
})


export class UserDetailComponent implements OnInit {

    // the user that will be populated 
    user: GithubUserDetail;
    emptyBio: string = "No bio available.";
    userBio: string;
    userGithubPageTooltip: string;
    userEmailTooltip: string;


    /**
     * Constructor with route, router and GithubUsersService injected
     */
    constructor(private route: ActivatedRoute,
        private router: Router,
        private service: GithubUsersService) {}

    /**
     * Create the user varible with the user's detail based on URL route
     */
    ngOnInit() {
        console.log('On Details');
        this.route.params
        .switchMap((params: Params) => { 
            // the params object looks something like: Object { login="mojombo"}
            return this.service.getUserDetail(params['login'])
        })
        .subscribe((user: Response) => {
            // get the body by calling .json() method
            this.user = <GithubUserDetail>user.json();
            this.userBio = this.user.bio === null ? this.emptyBio : this.user.bio;
            this.userGithubPageTooltip = "Go to " + this.user.login + "'s Github page";
            this.userEmailTooltip = "Email " + this.user.login;
        });
    }

    goToAllUsers() {
        // Pass along the hero id if available
        // so that the UserListComponent can select that hero with css.
        let userLogin = this.user ? this.user.login : null;
        this.router.navigate(['/search', { lastViewed: userLogin }]);
    }

}
