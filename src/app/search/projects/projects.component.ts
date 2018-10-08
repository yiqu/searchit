import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'projects-search',
  providers: [SearchService],
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css', '../search.component.css']
})

export class ProjectSearchComponent implements OnInit {

  constructor(private ts: TitleService, private route: ActivatedRoute,
    private ss: SearchService) { 
      this.ts.setAppTitle(this.route.snapshot.data.pageTitle);
    }

  ngOnInit() {
    console.log(this.ss.githubBaseApi);
    
  }
}