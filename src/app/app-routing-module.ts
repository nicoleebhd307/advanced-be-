import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Notfound } from './notfound/notfound';
import { Productdetail } from './productdetail/productdetail';
import { ProductimageEx13 } from './productimage-ex13';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';

const routes: Routes = [
  { path: 'gioi-thieu', component: About },
  { path: 'san-pham-1', component: Listproduct1 },
  { path: 'san-pham-2', component: Listproduct2 },
  { path: 'san-pham-3', component: Listproduct3 },
  { path: 'san-pham-2/:id', component: Productdetail }, // route with parameter
  { path: '**', component: Notfound },  // wildcard route for a 404 page

  // Exercise 13 
  {
    path: 'app-productimg-ex13',
    component: ProductimageEx13
  },
  {
    path: 'app-productimg-ex13/:id',
    component: ProductimageEx13 
  },
  // Service Product Image Event
  {
    path: 'service-product-image-event',
    component: ServiceProductImageEvent
  },
  {
    path: 'service-product-image-event/:id',
    component: ServiceProductImageEventDetail
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
