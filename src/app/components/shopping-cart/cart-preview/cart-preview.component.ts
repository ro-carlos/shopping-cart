import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss'],
})
export class CartPreviewComponent {
  constructor(public cartService: CartService) {}

  onClickRemoveSelectedPurchase() {
    this.cartService.removeSelectedPurchase();
  }
}
