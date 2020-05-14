import { Component, Input } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-modal-cart-item',
  templateUrl: './modal-cart-item.component.html',
  styleUrls: ['./modal-cart-item.component.scss'],
})
export class ModalCartItemComponent {
  @Input() purchase: Purchase;
  constructor(public cartService: CartService) {}

  onClickRemove() {
    this.cartService.removeProduct(this.purchase.product);
  }
}
