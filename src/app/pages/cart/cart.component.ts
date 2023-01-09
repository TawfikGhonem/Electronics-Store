// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { PRODUCT } from 'src/models/product.model';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: PRODUCT[] = [];
  allProducts: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.productList.subscribe(data => {
      this.products = data;
      this.allProducts = this.cartService.getTotalAmount();
    })
  }

  removeProduct(item: any) {
    this.products.splice(item, 1);
    this.cartService.setProduct(this.products);
  }

  removeAllProducts() {
    this.products = [];
    this.cartService.setProduct(this.products);
  }

}
