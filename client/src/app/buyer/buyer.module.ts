import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { DisplayModule} from './display/display.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    DisplayModule
  ]
})
export class BuyerModule { }
