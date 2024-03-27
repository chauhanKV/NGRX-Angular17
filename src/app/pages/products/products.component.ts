import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { IProduct } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart/cart.action';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(private store: Store<{ cart: { products: IProduct[] } }>) {}
  productsService = inject(ProductsService);

  products$ = this.productsService.getProducts() as Observable<IProduct[]>;

  addToCart(product: IProduct) {
    this.store.dispatch(addToCart({ product }));
  }
}
