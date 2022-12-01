import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://60d5fb88943aa60017768d42.mockapi.io/api/stock/products'
@Injectable({
  providedIn: 'root'
})
export class BitrexProductDataService {

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL)
                .pipe(
                  tap((products: Product[]) => products.forEach(product =>  product.quantity = 0))
                );
  }
}
