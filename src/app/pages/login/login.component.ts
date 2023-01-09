import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticationService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    const token = this.authService.authUser(loginForm.value);
    const email = this.authService.authUserEmail(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      localStorage.setItem('email', email.email);
      this.alertify.success('Login successful!');
      this.router.navigate(['/']);
    } else {
      this.alertify.error('Login failed!');
    }
  }

}
