import { Injectable, inject } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from '../product/product.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductEffect {
  productService = inject(ProductsService);
  actions$ = inject(Actions);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((response) =>
            ProductActions.loadProductSuccess({ products: response })
          ),
          catchError((error) =>
            of(ProductActions.loadProductFailure({ errorMessage: error }))
          )
        )
      )
    )
  );
}
