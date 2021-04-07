import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    DashboardModule
  ]
})
export class BuyerModule { }
