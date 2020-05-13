import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Array<Product> = [];
  offset = 3;

  constructor(private productService: ProductService) {}

  requestPage = (key: number, offset: number) => {
    return this.productService.getProducts(key, offset).pipe(
      tap((response) => {
        this.products = response.slice(0, this.offset);
      })
    );
  };
}
