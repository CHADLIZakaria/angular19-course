import { Component, computed, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product.model';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-products-list',
  imports: [DashboardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  productService = inject(ProductService);
  products = computed(() => this.productService.getAllProducts());


  select(product: Product) {
    this.productService.selectProduct(product)
  }

  delete(product: Product) {
    this.productService.deleteProduct(product)
  }
}
