import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
  produtForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  productService = inject(ProductService)

  ngOnInit(): void {
    this.produtForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      price: this.formBuilder.control(0),
      selected: this.formBuilder.control(false)
    })
  }

  save() {
    console.log(this.produtForm.value)
    this.productService.saveProduct({...this.produtForm.value, price: +this.produtForm.value['price']})

  }
}
