import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  dbKey = '/products';
  products: Array<Product> = [];

  constructor(private db: AngularFireDatabase) {}

  getProducts(start: number, offset: number): Observable<any> {
    return this.db
      .list(this.dbKey, (response) =>
        response.orderByChild('id').startAt(start).limitToLast(offset)
      )
      .valueChanges();
  }
}
