/**
 * Model for a Github user
 */
export interface GithubUser {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
  type: string;
}