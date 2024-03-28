import { CartState } from './cart/cart.reducer';
import { ProductState } from './product/product.reducer';
import { UserState } from './user/user.reducer';

export interface AppState {
  user: UserState;
  cart: CartState;
  product: ProductState;
}
