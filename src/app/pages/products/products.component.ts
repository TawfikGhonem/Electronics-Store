import { Component, OnInit } from '@angular/core';
import { PRODUCT } from 'src/models/product.model';
import { CartService } from 'src/services/cart.service';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public Product: PRODUCT[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.Product = data;
      this.Product.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.productPrice });
      })
    });
  }

  addtoCart(item: any) {
    this.cartService.addToCart(item);
  }

}
