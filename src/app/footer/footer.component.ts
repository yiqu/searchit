import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent implements OnInit {

  footerItemsLeft: FooterItem[] = [];
  footerItemsRight: FooterItem[] = [];
  currentLogoIndex: string = "1.jpg";

  constructor() {
    this.footerItemsLeft.push(new FooterItem("© 2018 YQ", null));
    this.footerItemsLeft.push(new FooterItem("Terms", "terms"));
    this.footerItemsLeft.push(new FooterItem("Privacy", "privacy"));
    this.footerItemsLeft.push(new FooterItem("Security", "security"));
    this.footerItemsLeft.push(new FooterItem("Status", "status"));

    this.footerItemsRight.push(new FooterItem("About", "/about"));
    this.footerItemsRight.push(new FooterItem("Tutorial", "tutorial"));
    this.footerItemsRight.push(new FooterItem("Contact", ['',{outlets:{feedback:['compose']}}]));
  }

  ngOnInit() { 
    this.onLogoClick();
  }

  onLogoClick() {
    let logoIndex = this.getRandomInt(1, 10);
    this.currentLogoIndex = (logoIndex === parseInt(this.currentLogoIndex) ? this.getRandomInt(1, 10): logoIndex) 
      + (logoIndex === 2 ? '.gif':'.jpg');
  }

  getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export class FooterItem {
  text: string;
  url: string | Array<any>;

  constructor(text: string, url: string | Array<any>) {
    this.text = text;
    this.url = url;
  }
}