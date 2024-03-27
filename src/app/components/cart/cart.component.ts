import { Component } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import {
  selectCartProducts,
  selectTotalPrice,
} from '../../store/cart/cart.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import * as CartActions from '../../store/cart/cart.action';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(private store: Store<AppState>) {}

  cartItem$ = this.store.select(selectCartProducts);
  cartTotalPrice$ = this.store.select(selectTotalPrice);

  removeItem(productID: number) {
    this.store.dispatch(CartActions.removeProduct({ productID }));
  }

  increment(productID: number) {
    this.store.dispatch(CartActions.incrementProduct({ productID }));
  }

  decrement(productID: number) {
    this.store.dispatch(CartActions.decrementProduct({ productID }));
  }
}
