import { Service } from '@angular/core';
import { Injectable, signal, computed, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number;
  name: string;
  price: number;
}
@Injectable({
  providedIn: 'root',
})
export class Cart {
  private http = inject(HttpClient);

  products = signal<Product[]>([
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Mouse', price: 500 },
    { id: 3, name: 'Keyboard', price: 550 },
    { id: 4, name: 'HeadPhone', price: 55002 },
    { id: 5, name: 'Mobile', price: 55001 },
    { id: 6, name: 'Earpods', price: 5500 },
  ]);

  cartItems = signal<Product[]>([]);
  totalValue = computed(() => this.cartItems().reduce((acc, item) => acc + item.price, 0));
  addToCart(product: Product): void {
    this.cartItems.update((currentItems) => [...currentItems, product]);
  }
}
