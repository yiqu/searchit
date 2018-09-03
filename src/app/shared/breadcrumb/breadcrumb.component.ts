import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: 'breadcrumb.component.html'
})

export class BreadCrumbComponent implements OnInit {

  breadcrumbs$: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.breadcrumbs$ = this.router.events.pipe(
      filter(event => {
        return event instanceof NavigationEnd;
      }),
      switchMap(event => this.buildBreadCrumb(event))
    );
   }

  ngOnInit() { }

  buildBreadCrumb(event) {
    console.log(event)
    return of([1,2,3]);
  }
  
}