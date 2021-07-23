import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { HeaderLogoComponent } from './features/header/header-logo/header-logo.component';
import { HeaderTitleComponent } from './features/header/header-title/header-title.component';
import { HeaderCartComponent } from './features/header/header-cart/header-cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './features/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent,
    HeaderLogoComponent,
    HeaderTitleComponent,
    HeaderCartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FontAwesomeModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
