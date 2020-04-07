import { Component } from '@angular/core';
import { ProductService } from './product.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      type: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      characteristics: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      purchaseTagValue: new FormControl('', [Validators.required]),
      amountPaidOnPurchase: new FormControl('', [Validators.required]),
      suggestedPrice: new FormControl('', [Validators.required])
    });
  }

  onSubmit(productData) {
    console.log(productData);
    console.log(!this.productForm.valid);
    if (this.productForm.invalid) return;
    let request = {
      type: this.productForm.get('type').value,
      brand: this.productForm.get('brand').value,
      size: this.productForm.get('size').value,
      characteristics: this.productForm.get('characteristics').value,
      color: this.productForm.get('color').value,
      purchaseTagValue: this.productForm.get('purchaseTagValue').value,
      amountPaidOnPurchase: this.productForm.get('amountPaidOnPurchase').value,
      suggestedPrice: this.productForm.get('suggestedPrice').value
    };
    console.log(request);
    this.productService.registerProduct(productData).subscribe(
      response => {
        alert('Produto cadastrado');
      },
      err => {
        alert(err);
      }
    );

    this.productForm.reset();
  }
}
