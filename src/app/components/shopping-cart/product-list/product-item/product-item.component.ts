import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor() {}

  ngOnInit() {}

  // Use a service to add the product to the cart
  onClickAddToCart() {
    //
    console.log('Product added to cart');
  }
}
