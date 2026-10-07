import { Component, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { Vendor } from '@app/vendor/vendor';
import { VendorService } from '@app/vendor/vendor.service';

import { Product } from '@app/product/product';
import { ProductService } from '../product.service';
import { ProductDetails } from '../product-details/product-details';
import { PRODUCT_DEFAULT } from '@app/constants';

@Component({
  selector: 'app-product-home',
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule,
    MatTooltipModule, ProductDetails],
  templateUrl: './product-home.html',
  styleUrl: './product-home.scss',
})
export class ProductHome implements OnInit {
  constructor(public productService: ProductService, public vendorService: VendorService) {}

  tableColumns: string[] = ['id', 'name', 'vendorId'];

  // Data
  productsTable = new MatTableDataSource<Product>();
  vendors = signal<Vendor[]>([]);

  // Selection state
  productInDetail = signal<Product>(PRODUCT_DEFAULT);
  hasSelectedProduct = signal(false);
  newProduct = signal(false);

  ngOnInit(): void {
    this.loadProducts();
    this.loadVendors();
  }

  loadProducts() {
    this.productService.getAll().subscribe({
      next: (payload: Product[]) => (this.productsTable.data = payload),
      error: e => console.log(e),
    });
  }

  loadVendors() {
    this.vendorService.getAll().subscribe({
      next: (payload: Vendor[]) => this.vendors.set(payload),
      error: e => console.log(e),
    });
  }

  selectProduct(product: Product) {
    this.productInDetail.set(product);
    this.newProduct.set(false);
    this.hasSelectedProduct.set(true);
  }

  addNewProduct() {
    this.productInDetail.set(PRODUCT_DEFAULT);
    this.newProduct.set(true);
    this.hasSelectedProduct.set(true);
  }

  refresh() {
    this.hasSelectedProduct.set(false);
    this.newProduct.set(false);
    this.loadProducts();
  }

  saveProduct(product: Product) {
    const request = this.newProduct()
      ? this.productService.create(product)
      : this.productService.update(product);
    request.subscribe({
      next: () => this.refresh(),
      error: e => console.log(e),
    });
  }

  deleteProduct(id: string) {
    this.productService.delete(id).subscribe({
      next: () => this.refresh(),
      error: e => console.log(e),
    });
  }

  vendorOfId(vendorId: number) {
    return this.vendors().find(v => v.id == vendorId);
  }
}