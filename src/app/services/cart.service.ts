import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // key is the product id and value is a Purchase
  cart = new Map<string, Purchase>();
  totalPurchase = 0;
  totalProducts = 0;
  selectedPurchase: Purchase;

  addProduct(product: Product) {
    let purchase: Purchase = this.cart.get(product.id);
    if (purchase) {
      purchase.quantity += 1;
      this.cart.set(product.id, purchase);
    } else {
      purchase = new Purchase(product, 1);
      this.cart.set(product.id, purchase);
    }
    this.selectedPurchase = purchase;
    this.totalPurchase += product.price;
    this.totalProducts += 1;
  }

  removeProduct(product: Product) {
    const purchase: Purchase = this.cart.get(product.id);

    if (purchase && purchase.quantity > 1) {
      purchase.quantity -= 1;
      this.cart.set(product.id, purchase);
    } else {
      this.cart.delete(product.id);
    }
    this.selectedPurchase = null;
    this.totalPurchase -= product.price;
    this.totalProducts -= 1;
  }

  removeSelectedPurchase() {
    this.selectedPurchase = null;
  }
}
