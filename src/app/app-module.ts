import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { About } from "./about/about";
import { Contact } from "./contact/contact";
import { Listproduct1 } from "./listproduct1/listproduct1";
import { Listproduct3 } from "./listproduct3/listproduct3";
import { Customer18 } from "./customer18/customer18";
import { ListCustomer } from "./list-customer/list-customer";
import { Product14 } from "./product14/product14";
import { Exercise10 } from "./exercise10/exercise10";
import { Listproduct2 } from "./listproduct2/listproduct2";
import { Notfound } from "./notfound/notfound";
import { Productdetail } from "./productdetail/productdetail";
import { Exercise13Detail } from "./exercise13-detail/exercise13-detail";
import { ServiceProductImageEventComponent } from "./exercise13/exercise13";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing-module";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { App } from "./app";
import { Exercise19 } from './exercise19/exercise19';
import { DongABankComponent } from './dongabank/dongabank';
import { FakeProductComponent } from './fake-product/fake-product';
import { CoinComponent } from './coin/coin';
import { BooksComponent } from './books/books';
import { Books50Component } from "./exercise50/books/books";
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
    Exercise13Detail,
    ServiceProductImageEventComponent,
    Exercise19,
    DongABankComponent,
    FakeProductComponent,
    CoinComponent,
    BooksComponent,
    Books50Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatIconModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App]  
})
export class AppModule { }
