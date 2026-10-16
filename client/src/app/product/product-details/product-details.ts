import { Component, OnInit, input, output } from '@angular/core';

import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

import { Product } from '@app/product/product';
import { Vendor } from '@app/vendor/vendor';
import { PRODUCT_DEFAULT } from '@app/constants';

@Component({
  selector: 'app-product-details',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule,
    MatSelectModule, MatOptionModule, MatExpansionModule,
    MatLabel, MatFormField],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {

  // Inputs
  product = input<Product>(PRODUCT_DEFAULT);
  vendors = input<Vendor[]>([]);

  // Outputs
  saved = output<Product>();
  deleted = output<string>();
  closed = output<void>();

  // Forms
  productForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.compose([Validators.required])),
    vendorId: new FormControl(0, Validators.compose([Validators.min(1)])),
    name: new FormControl('', Validators.compose([Validators.required])),
    cost: new FormControl(0, Validators.compose([Validators.min(0)])),
    msrp: new FormControl(0, Validators.compose([Validators.min(0)])),
    rop: new FormControl(0, Validators.compose([Validators.min(0)])),
    eoq: new FormControl(0, Validators.compose([Validators.min(0)])),
    qoh: new FormControl(0, Validators.compose([Validators.min(0)])),
    qoo: new FormControl(0, Validators.compose([Validators.min(0)]))
  });

  ngOnInit(): void {
    this.productForm.setValue({
      id: this.product().id,
      vendorId: this.product().vendorId,
      name: this.product().name,
      cost: this.product().cost,
      msrp: this.product().msrp,
      rop: this.product().rop,
      eoq: this.product().eoq,
      qoh: this.product().qoh,
      qoo: this.product().qoo
    });
  }
}