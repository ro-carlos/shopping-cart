import { Product } from './product';

export class Purchase {
  constructor(public product: Product, public quantity: number) {}
}
