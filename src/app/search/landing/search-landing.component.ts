import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ChildActivationEnd } from '@angular/router';
import { filter, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BreadCrumb } from '../../models/breadcrumb/breadcrumb.model';
import { of, Observable } from 'rxjs';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'search-home-landing',
  templateUrl: 'search-landing.component.html',
  styleUrls: ['search-landing.component.css', '../search.component.css']
})

export class SearchLandingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private ts: TitleService) {
      this.ts.setAppTitle(this.route.snapshot.data.pageTitle);
  }

  ngOnInit() {
  }

}