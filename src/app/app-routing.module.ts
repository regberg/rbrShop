import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './features/cart/cart.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { ProductsComponent } from './features/products/products.component';
import { SearchComponent } from './features/search/search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'produkte',
  },
  {
    path: 'produkte',
    component: ProductsComponent,
  },
  {
    path: 'suche',
    component: SearchComponent,
  },
  {
    path: 'warenkorb',
    component: CartComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
