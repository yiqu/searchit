/**
 * Navigation item class
 */
export class NavItem {
  url: string[] = [];
  activeCss: string = "";
  displayText: string = "";

  constructor(navUrl: string[], activeClass: string = "active-link", displayText: string) {
    this.url = navUrl;
    this.activeCss = activeClass;
    this.displayText = displayText;
  }
}