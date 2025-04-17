
import { effect, Injectable, signal } from '@angular/core';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsState = signal<Product[]>([])
  constructor() {
    effect(() => {
      this.productsState.set([
        {
          id: 1,
          name: 'AA',
          price: 200,
          selected: false
        },
        {
          id: 2,
          name: 'AB',
          price: 700,
          selected: true
        },
        {
          id: 3,
          name: 'AC',
          price: 900,
          selected: true
        }
      ])
    })
  }

  public getAllProducts() {
    return this.productsState();
  }

  public selectProduct(product: Product) {
    this.productsState.update(products => products.map(element => element.id === product.id ? {...element, selected: !element.selected} : element))
  }

  public deleteProduct(product: Product) {
    this.productsState.update(products => products.filter(element => element.id !== product.id))
  }

  public saveProduct(product: Product) {
    this.productsState.update(products => [...products, product])
  }

}
