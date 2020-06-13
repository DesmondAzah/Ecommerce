import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public cart = 0;
  constructor() { }

  ngOnInit() {
  }
  addToCart() {
    this.cart = this.cart + 1;
  }
  removeFromCart() {
    if (this.cart !== 0) {
      this.cart = this.cart - 1;
    }
  }

}
