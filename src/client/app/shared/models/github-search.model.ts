/**
 * Model for a Searchable. Purpose is to store the login 
 * that is being searched.
 */
export interface Searchable {
  login: string;
  type?: string;
  repos?: string;
  created?: Date;
  followerFilter?: string;
  followers?: number;
}