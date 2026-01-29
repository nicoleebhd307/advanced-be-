import { Injectable } from '@angular/core';
import { ProductService } from './product';
import { Router } from '@angular/router';
import { ListproductEx13Service } from './listproduct-ex13-service';

@Injectable({
  providedIn: 'root',
})
export class ProductimageEx13 {
  public products: any
  constructor(pservice: ListproductEx13Service, private router: Router) {
    this.products = pservice.getProductsWithImages()
  }
  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.ProductId])
  }
}
