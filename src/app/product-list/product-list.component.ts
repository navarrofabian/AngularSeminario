import { Component, OnInit } from '@angular/core';
import { BitrexProductDataService } from '../bitrex-product-data.service';
import { ProductCartService } from '../product-cart.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private cart: ProductCartService,
    private productsDataService: BitrexProductDataService
    ) { 
  }

  ngOnInit(): void {
    this.productsDataService.getAll().subscribe(products =>  this.products = products);
  }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

}
