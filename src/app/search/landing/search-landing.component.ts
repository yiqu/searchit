import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, ChildActivationEnd } from '@angular/router';
import { filter, distinctUntilChanged, switchMap, delay, mapTo } from 'rxjs/operators';
import { of, Observable, fromEvent, interval } from 'rxjs';
import { TitleService } from '../../service/title.service';
import * as $ from 'jquery';

@Component({
  selector: 'search-home-landing',
  templateUrl: 'search-landing.component.html',
  styleUrls: ['search-landing.component.css', '../search.component.css']
})

export class SearchLandingComponent implements AfterViewInit, OnInit  {

  @ViewChild("next") 
  carouselNext: ElementRef;

  @ViewChild("previous") 
  carouselPrevious: ElementRef;

  @ViewChild("carouselExplore")
  carouselElement: ElementRef;

  exploreTitle: string = "";

  constructor(private route: ActivatedRoute, private router: Router,
    private ts: TitleService) {
      this.ts.setAppTitle(this.route.snapshot.data.pageTitle);

  }

  ngAfterViewInit() {
    const carouselElement$ = fromEvent(this.carouselNext.nativeElement, 'click');
    const carousel$ = carouselElement$.pipe(
      switchMap(val => {
        return of("").pipe(
          delay(220),
        );
      })
    );
    carousel$.subscribe((val) => {
      this.exploreTitle = this.getCurrentCarouselTitle();
    });
  }

  ngOnInit() {
    this.exploreTitle = this.getCurrentCarouselTitle();
  }

  /**
   * Explore carousel toggle prev and next buttons
   * 
   * @param element The carousel element 
   */
  exploreToggle(element) {
  } 

  getCurrentCarouselTitle() {
    return $(this.carouselElement.nativeElement).find(".active").get()[1]['title'];
  }

}