import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { HeaderLogoComponent } from './features/header/header-logo/header-logo.component';
import { HeaderTitleComponent } from './features/header/header-title/header-title.component';
import { HeaderCartComponent } from './features/header/header-cart/header-cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './features/footer/footer.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { SearchComponent } from './features/search/search.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { ProductsComponent } from './features/products/products.component';
import { ChangeBackgroundColorDirective } from './shared/directives/change-background-color.directive';
import { ProductItemComponent } from './features/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { ChangeBorderDirective } from './shared/directives/change-border.directive';
import { CalculateToEurPipe } from './shared/pipes/calculate-to-eur.pipe';
import { CartComponent } from './features/cart/cart.component';
import { OrderComponent } from './features/order/order.component';
import { OrderProductComponent } from './features/order-product/order-product.component';
import { OrderProductDetailComponent } from './features/order-product-detail/order-product-detail.component';
import { AddressFormComponent } from './features/address-form/address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLogoComponent,
    HeaderTitleComponent,
    HeaderCartComponent,
    FooterComponent,
    NavigationComponent,
    SearchComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ChangeBackgroundColorDirective,
    ProductItemComponent,
    ChangeBorderDirective,
    CalculateToEurPipe,
    CartComponent,
    OrderComponent,
    OrderProductComponent,
    OrderProductDetailComponent,
    AddressFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }
}
