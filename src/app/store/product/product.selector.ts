import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

//export const selectProducts = (state: AppState) => state.product;
export const selectProductFeature =
  createFeatureSelector<ProductState>('product');

export const selectAllProduct = createSelector(
  selectProductFeature,
  (state: ProductState) => state.products
);

export const selectProductError = createSelector(
  selectProductFeature,
  (state: ProductState) => state.error
);
