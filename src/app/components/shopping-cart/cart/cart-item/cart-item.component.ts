import { Component, Input } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() purchase: Purchase;
  constructor(public cartService: CartService) {}

  onClickRemove() {
    this.cartService.removeProduct(this.purchase.product);
  }
}
