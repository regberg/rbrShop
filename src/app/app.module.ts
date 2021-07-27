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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
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
