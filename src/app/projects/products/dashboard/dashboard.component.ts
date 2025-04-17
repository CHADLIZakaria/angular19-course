import { Component, computed, inject } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  productServivce = inject(ProductService);
  selectedProductsCount = computed<number>(() => this.productServivce.getAllProducts().filter(product => product.selected).length)
  totalSelectedProduct = computed<number>(() => this.productServivce.getAllProducts().filter(product => product.selected).reduce((acc, pro) => acc+pro.price, 0))
  
}
