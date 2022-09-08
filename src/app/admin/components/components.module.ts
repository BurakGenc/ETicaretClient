import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomersModule } from './customers/customers.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    OrdersModule,
    ProductsModule,
    DashboardModule,
    CustomersModule
  
  ]
})
export class ComponentsModule { }
