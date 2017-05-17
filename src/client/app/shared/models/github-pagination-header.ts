/**
 * Class to represent a Github Link Header object.
 * Used to store pagination
 */
export class LinkHeader {
  first: string;
  last: string;
  next: string;
  prev: string;
  [key: string]: any; // needed for index signature


  /**
   * Constructor to create a new {LinkHeader} and set the instance variables
   * with the corresponding urls
   * 
   * @param {Object} links - object containings the pagination
   */
  constructor(links?: Object) {
    this.setLinks(links);
  }


  /**
   * setter for setting the pagination urls
   * 
   * @param {any} links - object containings the pagination
   */
  setLinks(links: any): void {
    this.first = links === undefined ? null : links["first"];
    this.last = links === undefined ? null : links["last"];
    this.next = links === undefined ? null : links["next"];
    this.prev = links === undefined ? null : links["prev"];
  }
}