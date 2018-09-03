import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gists-search',
  templateUrl: 'gists.component.html',
  styleUrls: ['gists.component.css']
})

export class GistSearchComponent implements OnInit {
  constructor(private ts: TitleService, private route: ActivatedRoute) {
    this.ts.setAppTitle(this.route.snapshot.data.pageTitle);
   }

  ngOnInit() { }
}