import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss'],
})
export class CartModalComponent {
  cart: Map<String, Purchase>;
  totalProducts: number;
  totalPurchase: number;

  constructor(
    public dialogRef: MatDialogRef<CartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    (this.cart = this.data.cart),
      (this.totalProducts = this.data.totalProducts),
      (this.totalPurchase = this.data.totalPurchase);
  }

  ngOnInit() {
    (this.cart = this.data.cart),
      (this.totalProducts = this.data.totalProducts),
      (this.totalPurchase = this.totalPurchase);
  }

  actionFunction() {
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  onChangeCart(event) {
    this.cart = event;
  }

  onChangeTotalProducts(event) {
    this.totalProducts = event;
  }

  onChangeTotalPurchase(event) {
    this.totalPurchase = event;
  }
}
