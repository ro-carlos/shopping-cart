import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ErrorService } from 'src/app/services/error.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(
    private productService: ProductService,
    private errorService: ErrorService
  ) {}

  ngOnInit() {
    this.init();
  }

  updateProducts(event) {
    this.products = event;
  }

  requestPage = (key: number, offset: number) => {
    return this.productService.getProducts(key, offset);
  };

  private init() {}
}
