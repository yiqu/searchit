import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'gists-search',
  providers: [SearchService],
  templateUrl: 'gists.component.html',
  styleUrls: ['gists.component.css']
})

export class GistSearchComponent implements OnInit {
  constructor(private ts: TitleService, private route: ActivatedRoute,
    public ss: SearchService) {
    this.ts.setAppTitle(this.route.snapshot.data.pageTitle);
   }

  ngOnInit() { 
  }
}