import { Component, computed, OnInit, signal } from '@angular/core';
import { Product } from './model/product.model';
import { ProductsListComponent } from "./products-list/products-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddProductComponent } from "./add-product/add-product.component";

@Component({
  selector: 'app-products',
  imports: [ProductsListComponent, DashboardComponent, AddProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  price : number = 50;
  quantity = signal<number>(1)
  products= signal<Product[]>([])
  numberProductSelected = computed<number>(() => this.products().filter(product => product.selected).length)
  totalProductSelected = computed<number>(() => this.products().filter(product => product.selected).reduce((acc, prod) => acc+prod.price, 0))
 
  ngOnInit(): void {
    this.products.set(
      [
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
      ]
    )
  }  

  increment() {
    this.quantity.update(value => value + 1)
  }
  decrement() {
    this.quantity.update(value => value - 1)
  }

  select(product: Product) {
    this.products.update(products => {
      return products.map(element => element.id === product.id ? {...element, selected: !element.selected}: element)
    })   
  }
}

