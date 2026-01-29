// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-listproduct-ex13',
//   standalone: false,
//   templateUrl: './listproduct-ex13.html',
//   styleUrl: './listproduct-ex13.css',
// })
// export class ListproductEx13 {

//   selectedProduct: any
//   constructor(private activateRoute: ActivatedRoute, private _fs: ProductService,
//     private router: Router) {
//     activateRoute.paramMap.subscribe(
//       (param) => {
//         let id = param.get('id')
//         if (id != null) {
//           this.selectedProduct = _fs.getProductDetail(id)
//         }
//       }
//     )
//   }
//   goBack() {
//     this.router.navigate(['service-product-image-event'])
//   }
// }

