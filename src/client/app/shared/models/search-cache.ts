import { GithubUser } from '../models/github-user.model'

/**
 * Class to represent a SearchCacheable object
 * Used to "save" a user's search result and search inputs
 */
export class SearchCacheable {
    searchResult: GithubUser[];
    searchTerm: string;
    userDisplayCount: number;
    userTotalCount: number;

    /**
     * Constructor for SearchCacheable object.
     *
     * @param {GithubUser[]} result - returned search result
     * @param {string} term - search term 
     * @param {number} displayCount - results being displayed. Default=0
     * @param {number} totalCount - total results. Default=0
     */
    constructor(result:GithubUser[], term:string, displayCount: number=0, totalCount:number=0){
        this.searchResult = result;
        this.searchTerm = term;
        this.userDisplayCount = displayCount;
        this.userTotalCount = totalCount;
    }
}