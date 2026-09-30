import { Component, InputSignal, input, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Vendor } from '../vendor';
import { VENDOR_DEFAULT } from '../../constants';


@Component({
  selector: 'app-vendor-details',
  imports: [ReactiveFormsModule, MatLabel, MatFormField, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule],
  templateUrl: './vendor-details.html',
  styleUrl: './vendor-details.scss'
})

export class VendorDetails implements OnInit {
 
  vendor: InputSignal<Vendor> = input<Vendor>(VENDOR_DEFAULT);
  saved= output <Vendor>();
  closed = output <void>();


  vendorForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    province: new FormControl(),
    postalCode: new FormControl(),
    phone: new FormControl(),
    type: new FormControl(),
    email: new FormControl(),
  });
 
  ngOnInit(): void {
    this.vendorForm.setValue({
      id: this.vendor().id,
      name: this.vendor().name,
      address: this.vendor().address,
      city: this.vendor().city,
      province: this.vendor().province,
      postalCode: this.vendor().postalCode,
      phone: this.vendor().phone,
      type: this.vendor().type,
      email: this.vendor().email,
    });
  }
}
 