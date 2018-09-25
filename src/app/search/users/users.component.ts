import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'users-search',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css', '../search.component.css']
})

export class UserSearchComponent implements OnInit {

  constructor(private ts: TitleService, private route: ActivatedRoute) {
    this.ts.setAppTitle(this.route.snapshot.data.pageTitle);
   }

  ngOnInit() { }
}