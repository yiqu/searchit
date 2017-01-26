import { GithubUser } from '../models/github-user.model'

/**
 * Class to represent a SearchCacheable
 * Used to "save" a user's search result and search inputs
 */
export class SearchCacheable {
    searchResult: GithubUser[];
    searchTerm: string;
    userDisplayCount: 0;
    userTotalCount: 0;
}