import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Customer18 } from './customer18/customer18';

import { ListCustomer } from './list-customer/list-customer';
import { Product14 } from './product14/product14';
import { Exercise10 } from './exercise10/exercise10';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Notfound } from './notfound/notfound';
import { Productdetail } from './productdetail/productdetail';
import { ProductimgEx13 } from './productimg-ex13/productimg-ex13';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';

@NgModule({
  declarations: [
    App,
    About,
    Contact,
    Listproduct1,
    
    Listproduct3,
    Customer18,

    ListCustomer,
    Product14,
    Exercise10,

    Listproduct2,
      Notfound,
      Productdetail,
      ProductimgEx13,
      ServiceProductImageEvent,
      ServiceProductImageEventDetail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   // for making HTTP requests: dữ liệu nằm ở bên ngoài (BE)
    FormsModule,        // for two-way binding with [(ngModel)]
    CommonModule        // for ngClass, currency pipe, and other common directives/pipes
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
