import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../models/product.model';
import * as ProductActions from './product.action';

export interface ProductState {
  products: IProduct[] | null;
  error: string | null;
}

export const initialProductState: ProductState = {
  products: [],
  error: null,
};

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.loadProductSuccess, (state, { products }) => {
    return {
      ...state,
      products,
      error: null,
    };
  }),
  on(ProductActions.loadProductFailure, (state, { errorMessage }) => {
    return {
      ...state,
      error: errorMessage,
    };
  })
);
