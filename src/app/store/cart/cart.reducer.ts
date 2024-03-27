import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../models/product.model';
import * as CartActions from '../../store/cart/cart.action';

export interface CartState {
  products: IProduct[];
  totalPrice: number;
}

export const initialCartState: CartState = {
  products: [],
  totalPrice: 0,
};

export function calculateCartTotalPrice(products: IProduct[]) {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.addToCart, (state, { product }) => {
    const updatedProducts = [...state.products, product];
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateCartTotalPrice(updatedProducts),
    };
  }),
  on(CartActions.incrementProduct, (state, { productID }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productID
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateCartTotalPrice(updatedProducts),
    };
  }),
  on(CartActions.decrementProduct, (state, { productID }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productID
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateCartTotalPrice(updatedProducts),
    };
  }),
  on(CartActions.removeProduct, (state, { productID }) => {
    const updatedProducts = state.products.filter(
      (product) => product.id !== productID
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateCartTotalPrice(updatedProducts),
    };
  })
);
