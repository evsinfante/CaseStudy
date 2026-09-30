import { Component, OnInit, signal } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendors-home',
  imports: [MatCardModule, MatListModule],
  templateUrl: './vendor-home.html',
  styleUrl: './vendor-home.scss'
})
export class VendorHome implements OnInit {

  vendors = signal<Vendor[]>([]);

  constructor(public vendorService: VendorService) {
  }

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe({
      next: (payload: Vendor[]) => {
        console.log(payload);
        this.vendors.set(payload)
      },
      error: (e: Error) => console.error(e),
      complete: () => console.log('Complete!')
    });
  }
}