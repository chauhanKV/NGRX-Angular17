import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../models/product.model';

export const addToCart = createAction(
  '[Cart Component] AddToCart',
  props<{ product: IProduct }>()
);

export const incrementProduct = createAction(
  '[Cart Component] IncrementProduct',
  props<{ productID: number }>()
);

export const decrementProduct = createAction(
  '[Cart Component] DecrementProduct',
  props<{ productID: number }>()
);

export const removeProduct = createAction(
  '[Cart Component] RemoveProduct',
  props<{ productID: number }>()
);
