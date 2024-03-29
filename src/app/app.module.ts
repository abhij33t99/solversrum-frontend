import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from 'src/app/services/product/products.service';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { ShipperComponent } from './components/shipper/shipper.component';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import {NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing/landing.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    SupplierComponent,
    ShipperComponent,
    CustomerComponent,
    OrderComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbToastModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
