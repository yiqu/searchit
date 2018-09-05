import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'projects-search',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css', '../search.component.css']
})

export class ProjectSearchComponent implements OnInit {
  constructor(private ts: TitleService, private route: ActivatedRoute) { 
      this.ts.setAppTitle(this.route.snapshot.data.pageTitle);
    }

  ngOnInit() {
   }
}