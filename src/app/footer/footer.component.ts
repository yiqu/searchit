import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent implements OnInit {

  footerItemsLeft: FooterItem[] = [];
  footerItemsRight: FooterItem[] = [];

  constructor() {
    this.footerItemsLeft.push(new FooterItem("© 2018 YQ", ""));
    this.footerItemsLeft.push(new FooterItem("Terms", ""));
    this.footerItemsLeft.push(new FooterItem("Privacy", ""));
    this.footerItemsLeft.push(new FooterItem("Security", ""));
    this.footerItemsLeft.push(new FooterItem("Status", ""));

    this.footerItemsRight.push(new FooterItem("About", ""));
    this.footerItemsRight.push(new FooterItem("Tutorial", ""));
  }

  ngOnInit() { }
}

export class FooterItem {
  text: string;
  url: string;

  constructor(text: string, url: string) {
    this.text = text;
    this.url = url;
  }
}