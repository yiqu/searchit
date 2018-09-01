import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BreadCrumb } from '../models/breadcrumb/breadcrumb.model';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'search-home',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})

export class SearchHomeComponent implements OnInit {

  breadcrumbs$: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.breadcrumbs$ = this.router.events.pipe(
      filter(event => {
        return event instanceof NavigationEnd;
      }),
      switchMap(event => this.buildBreadCrumb(event))
    );
  }

  ngOnInit() {
    this.route.data.subscribe(
      (val) => {
      }
    )

    
  }

  buildBreadCrumb(event) {
    console.log(event)
    return of([1,2,3]);
  }

}