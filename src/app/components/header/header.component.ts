import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.model';
import { selectCartProducts } from '../../store/cart/cart.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  store = inject(Store<AppState>);

  productsCount$: Observable<IProduct[]>;
  constructor() {
    this.productsCount$ = this.store.select(selectCartProducts);
  }
}
