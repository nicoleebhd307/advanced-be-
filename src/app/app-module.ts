import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Customer18 } from './customer18/customer18';

@NgModule({
  declarations: [
    App,
    About,
    Contact,
    Listproduct1,
    
    Listproduct3,
    Customer18
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule   // for making HTTP requests: dữ liệu nằm ở bên ngoài (BE)
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
