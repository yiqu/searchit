/**
 * Model for a Github user detail
 */
export interface GithubUserDetail {
    id: number;
    avatar_url: string;
    login: string;
    email: string;
    name: string;
    company: string;
    location: string;
    bio: string;
    blog: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    html_url: string;
    repos_url: string;
    type: string;
    created_at: Date;
}