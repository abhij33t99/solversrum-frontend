import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LandingComponent } from './components/landing/landing/landing.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { ShipperComponent } from './components/shipper/shipper.component';
import { SupplierComponent } from './components/supplier/supplier.component';

const routes: Routes = [
  {path : '', component: LandingComponent},
  {path : 'products', component: ProductComponent},
  {path : 'shippers', component: ShipperComponent},
  {path: 'suppliers', component: SupplierComponent},
  {path: 'cart', component: CartComponent},
  {path: 'customers', component: CustomerComponent},
  {path : 'orders', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
