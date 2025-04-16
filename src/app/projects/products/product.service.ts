import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsState = signal<Product[]>([])
  constructor() {
    effect(() => {
    })
  }
}
