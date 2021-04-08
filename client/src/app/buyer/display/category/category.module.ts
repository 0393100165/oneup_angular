import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { CategoryComponent } from './category.component';
import { CategorySidebarComponent } from './category-sidebar/category-sidebar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DataService } from '../core-display/services/data.service';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    CategoryComponent,
    CategorySidebarComponent,
    CategoryListComponent,
    ProductDetailComponent
  ],
  imports: [ RouterModule, SharedModule, NgxGalleryModule,CommonModule],
  exports: [
    CategoryComponent,
    CategorySidebarComponent,
    CategoryListComponent,
    ProductDetailComponent
  ],
  providers: [DataService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CategoryModule {}
