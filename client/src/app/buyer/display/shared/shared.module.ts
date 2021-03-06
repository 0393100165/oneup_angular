import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginationModule} from 'ngx-bootstrap/pagination';
import { LazyLoadImageModule } from 'ng-lazyload-image';
// Components
import { FakeImageComponent } from './components/fake-image/fake-image.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { QuantityInputComponent } from './components/quantity-input/quantity-input.component';
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';
// Directives
import { DigitOnlyDirective } from './directives/digit-only.directive';
// Module
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    // Components
    FakeImageComponent,
    ProductThumbnailComponent,
    ProductListComponent,
    DropdownComponent,
    QuantityInputComponent,
    FieldErrorDisplayComponent,
    // Directives
    DigitOnlyDirective
  ],
  imports: [CommonModule, PaginationModule.forRoot(), LazyLoadImageModule],
  exports: [
    // Components
    FakeImageComponent,
    ProductThumbnailComponent,
    ProductListComponent,
    DropdownComponent,
    QuantityInputComponent,
    FieldErrorDisplayComponent,
    // Directives
    DigitOnlyDirective
  ]
})
export class SharedModule {}
