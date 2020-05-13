import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Array<Product> = [];

  constructor() {}

  // TODO: API to get products
  getProducts(): Observable<Product[]> {
    for (let i = 1; i <= 5; i++) {
      const product = new Product(
        i,
        'Product ' + i,
        'Some description',
        2500,
        3
      );
      this.products.push(product);
    }
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(this.products);
        subscriber.complete();
      }, 0);
    });
  }
}
