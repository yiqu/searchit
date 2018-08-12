import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Constructor
   */
  constructor(private titleService: Title) {
    this.setAppTitle();
  }

  setAppTitle(): void {
    this.titleService.setTitle(environment.pageTitle);
  }
}
