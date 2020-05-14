import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss'],
})
export class CartModalComponent {
  constructor(public dialogRef: MatDialogRef<CartModalComponent>) {}

  actionFunction() {
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
