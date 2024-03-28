import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { ProductsService } from '../../service/products.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart/cart.action';
import { AppState } from '../../store/app.state';
import {
  selectAllProduct,
  selectProductError,
} from '../../store/product/product.selector';
import { IProduct } from '../../models/product.model';
import { Observable } from 'rxjs';
import * as ProductActions from '../../store/product/product.action';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products$!: Observable<IProduct[] | null>;
  error$!: Observable<string | null>;
  constructor(private store: Store<AppState>) {
    this.store.dispatch(ProductActions.loadProduct());
    this.products$ = this.store.select(selectAllProduct);
    this.error$ = this.store.select(selectProductError);
  }
  productsService = inject(ProductsService);

  //products$ = this.productsService.getProducts() as Observable<IProduct[]>;

  addToCart(product: IProduct) {
    this.store.dispatch(addToCart({ product }));
  }
}
