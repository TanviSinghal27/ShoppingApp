import { ChangeDetectionStrategy, Component } from '@angular/core';
import { inject } from '@angular/core';
import { Cart, Product } from '../services/cart';

@Component({
  imports: [],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductList {
  private cartService = inject(Cart);
  products = this.cartService.products;
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
