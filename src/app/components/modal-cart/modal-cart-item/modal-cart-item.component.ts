import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-modal-cart-item',
  templateUrl: './modal-cart-item.component.html',
  styleUrls: ['./modal-cart-item.component.scss'],
})
export class ModalCartItemComponent {
  @Input() purchase: Purchase;
  @Output() changeCart: EventEmitter<
    Map<string, Purchase>
  > = new EventEmitter();
  @Output() changeTotalProducts: EventEmitter<number> = new EventEmitter();
  @Output() changeTotalPurchase: EventEmitter<number> = new EventEmitter();

  constructor(public cartService: CartService) {}

  onClickRemove() {
    this.cartService.removeProduct(this.purchase.product);
    this.changeCart.emit(this.cartService.cart);
    this.changeTotalProducts.emit(this.cartService.totalProducts);
    this.changeTotalPurchase.emit(this.cartService.totalPurchase);
  }
}
