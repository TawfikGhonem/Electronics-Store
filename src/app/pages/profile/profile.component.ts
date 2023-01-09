// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedInUser: string;
  emailOfUser: string;

  constructor() { }

  ngOnInit(): void {
  }

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token');
    this.emailOfUser = localStorage.getItem('email');
    return this.loggedInUser, this.emailOfUser;
  }

}
