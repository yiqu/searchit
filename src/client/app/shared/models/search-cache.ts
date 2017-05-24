import { GithubUser } from '../models/github-user.model'


/**
 * Class to represent a SearchCacheable object
 * Used to "save" a user's search result and search inputs
 */
export class SearchCacheable {
  searchResult: GithubUser[];
  searchTerm: string;
  searchTermType: string;
  searchTermFollowerFilter: string;
  searchTermFollowerCount: number;
  userDisplayCount: number;
  userTotalCount: number;

  /**
   * Constructor for SearchCacheable object.
   *
   * @param {GithubUser[]} result - returned search result
   * @param {string} term - search term 
   * @param {number} displayCount - results being displayed. Default=0
   * @param {number} totalCount - total results. Default=0
   * @param {string} searchTermType - Search type, user, org or any. Default="user"
   * @param {string} followerFilter - Greater than, less than, or any (noFilter). Default=any
   * @param {number} followerCount - followers greater than... Default=10
   */
  constructor(result: GithubUser[], term: string, displayCount: number=0, totalCount: number=0,
    searchTermType: string ="user", followerFilter: string = "noFilter", followerCount: number = 10){
    this.searchResult = result;
    this.searchTerm = term;
    this.searchTermType = searchTermType;
    this.searchTermFollowerFilter = followerFilter;
    this.searchTermFollowerCount = followerCount;
    this.userDisplayCount = displayCount;
    this.userTotalCount = totalCount;
  }
}