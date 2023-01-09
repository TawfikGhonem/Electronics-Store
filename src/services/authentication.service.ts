// @ts-nocheck
import { Injectable } from "@angular/core";
import { User } from "src/models/user.model";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    constructor() {}

    authUser(user: User) {
      let UserArray = [];
      if (localStorage.getItem('Users')) {
        UserArray = JSON.parse(localStorage.getItem('Users'));
      }
      return UserArray.find(p => p.email === user.email && p.password === user.password);
    }

    authUserEmail(user: User) {
      let UserArray = [];
      if (localStorage.getItem('Users')) {
        UserArray = JSON.parse(localStorage.getItem('Users'));
      }
      return UserArray.find(p => p.email === user.email);
    }

    addUser(user) {
      let users = [];
      if (localStorage.getItem('Users')) {
        users = JSON.parse(localStorage.getItem('Users'));
        users = [...users, user];
      } else {
        users = [user];
      }
      localStorage.setItem('Users', JSON.stringify(users));
    }
}
