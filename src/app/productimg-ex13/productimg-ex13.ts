import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListproductEx13Service } from '../listproduct-ex13-service';

@Component({
  selector: 'app-productimg-ex13',
  standalone: false,
  templateUrl: './productimg-ex13.html',
  styleUrl: './productimg-ex13.css',
})
export class ProductimgEx13 {
  selectedProduct: any
  constructor(private activateRoute: ActivatedRoute, private _fs: ListproductEx13Service,
    private router: Router) {
    activateRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id')
        if (id != null) {
          this.selectedProduct = _fs.getProductDetail(id)
        }
      }
    )
  }
  goBack() {
    this.router.navigate(['service-product-image-event'])
  }
}
