import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayRoutingModule } from './display-routing.module';
import { EmptyComponent } from './empty/empty.component';
import { FooterComponent } from './footer/footer.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CarouselComponent } from './front-page/carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from './shared/shared.module';
//module
import { NotifierModule } from 'angular-notifier';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CategoryModule } from './category/category.module';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

// Services
import { DataService } from '../display/core-display/services/data.service';
@NgModule({
  declarations: [EmptyComponent, FooterComponent, FrontPageComponent, CarouselComponent, HeaderComponent, NotFoundComponent, PaymentComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxGalleryModule,
    RouterModule,
    CategoryModule,
    TooltipModule.forRoot(),
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          position: 'top'
        }
      }
    })
    

  ],
  providers: [DataService],
})
export class DisplayModule { }
