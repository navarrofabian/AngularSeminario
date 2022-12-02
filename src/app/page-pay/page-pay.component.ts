import { Component, OnInit } from '@angular/core';import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';


@Component({
  selector: 'app-page-pay',
  templateUrl: './page-pay.component.html',
  styleUrls: ['./page-pay.component.css']
})
export class PagePayComponent implements OnInit {

  cartList$: Observable<Product[]>;
  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
