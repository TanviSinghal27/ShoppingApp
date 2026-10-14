import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Cart } from '../services/cart';
import { inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private cartService = inject(Cart);
  cartItems = this.cartService.cartItems;
  totalValue = this.cartService.totalValue;
}
