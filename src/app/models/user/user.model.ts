/**
 * User account class
 */
export class User {
  userName: string = "";
  userEmail: string = "";

  constructor(name: string = "Guest", email?: string) {
    this.userName = name;
    this.userEmail = email;
  }
}