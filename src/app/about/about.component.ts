import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})

export class AboutComponent implements OnInit {

  public changelog: Array<any>;

  constructor() {
    // change log information array
    this.changelog = [
      {
        version: '0.1.0',
        date: new Date('09/27/18'),
        changes: 'Init. creation of the project.Init. creation of the project.Init. creation of the project.' +
        'Init. creation of the project.Init. creation of the project.Init. creation of the project.Init. creation of the project.'+
        'Init. creation of the project.Init. creation of the project.Init. creation of the project.',
        externalLink: undefined,
        linkUrl: null
      },
      {
        version: '0.1.1',
        date: new Date('09/27/18'),
        changes: 'Routes',
        externalLink: undefined,
        linkUrl: null
      },
    ];
  }

  ngOnInit() {}
}