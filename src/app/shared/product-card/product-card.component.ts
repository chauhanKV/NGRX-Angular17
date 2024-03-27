import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: IProduct;
  @Output() handleAddToCart = new EventEmitter();

  addToCart(product: IProduct) {
    this.handleAddToCart.emit(product);
  }
}
