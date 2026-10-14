import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { CartComponent } from '../cart/cart';

@Component({
  imports: [ProductList, CartComponent],
  selector: 'app-first-page',
  styleUrl: './first-page.css',
  templateUrl: './first-page.html',
})
export class FirstPage {}
