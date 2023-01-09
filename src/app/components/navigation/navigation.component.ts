// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/services/alertify.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
     itemInCart: number = 0;
     loggedInUser: string;

  constructor(private cartService: CartService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.cartService.productList.subscribe((res: any) => {
      this.itemInCart = res.length;
    })
  }

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token');
    return this.loggedInUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success('Logout successful!');
  }

}
