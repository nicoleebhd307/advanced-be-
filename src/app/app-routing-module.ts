import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Notfound } from './notfound/notfound';
import { Productdetail } from './productdetail/productdetail';
import { ServiceProductImageEventComponent } from './exercise13/exercise13';
import { Exercise13Detail } from './exercise13-detail/exercise13-detail';
import { Exercise19 } from './exercise19/exercise19';
import { Product14 } from './product14/product14';
import { Customer18 } from './customer18/customer18';

const routes: Routes = [
  { path: 'gioi-thieu', component: About },
  { path: 'san-pham-1', component: Listproduct1 },
  { path: 'san-pham-2', component: Listproduct2 },
  { path: 'san-pham-3', component: Listproduct3 },
  { path: 'san-pham-2/:id', component: Productdetail }, // route with parameter
  // exercise 13 routes
  { path: 'ex-13', component: ServiceProductImageEventComponent },
  { path: 'ex-13/:id', component: Exercise13Detail },
  { path: 'ex-19', component: Exercise19 },
  { path: 'ex-14', component: Product14 },
  { path: 'ex-18', component: Customer18 },

  { path: '**', component: Notfound },  // wildcard route for a 404 page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 

})
export class AppRoutingModule { }
