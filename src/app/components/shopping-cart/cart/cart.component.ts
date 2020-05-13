import { Component } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  getKeys(map: Map<string, Purchase>) {
    return Array.from(map.keys());
  }
}
