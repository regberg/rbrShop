import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() searchString = '';
  public products$: Observable<Product[]>;
  public subscription: Subscription;
  public numberResults;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getAllProducts$();

    this.setNumberResults();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.products$ = this.productsService.getFilteredProducts$(
      this.searchString
    );

    this.setNumberResults();
  }

  private setNumberResults() {
    this.subscription = this.products$.subscribe(
      (products) => (this.numberResults = products.length)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * addProductToCart
   **/
  public addProductToCart(product: Product) { }
}
