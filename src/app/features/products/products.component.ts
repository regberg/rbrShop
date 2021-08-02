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
import { OrdersService } from 'src/app/shared/services/orders.service';
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

  /**
   * Injiziert "productsService" und "ordersService".
   *
   * @param productsService
   *
   * @param ordersService
   */
  constructor(
    private productsService: ProductsService,
    private ordersService: OrdersService
  ) {}

  /**
   * Ermittelt die anzuzeigenden Product-Objekte, deren Anzahl
   * und erzeugt ein neues Order-Objekt mit aktuellem Status,
   * falls dieses noch nicht vorhanden ist.
   */
  ngOnInit(): void {
    this.products$ = this.productsService.getAllProducts$();
    this.setNumberResults();
    this.ordersService.setActualOrder();

    if (
      this.ordersService.getActualOrder() === undefined ||
      this.ordersService.getActualOrder() === null
    ) {
      this.ordersService.createNewOrderAndAddToOrders(`orderAt-${new Date()}`);
    }
  }

  /**
   * Wird beim Ändern des Inhalts des Eingabefelds aufgerufen.
   * Ermittelt die gefilterten Product-Objekte und deren Anzahl.
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.products$ = this.productsService.getFilteredProducts$(
      this.searchString
    );

    this.setNumberResults();
  }

  /**
   * ngOnDestroy()
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Setzt die Anzahl der ermittelten Product-Objekte.
   */
  private setNumberResults() {
    this.subscription = this.products$.subscribe(
      (products) => (this.numberResults = products.length)
    );
  }

  /**
   * Ordnet "product" dem aktuellen Order-Objekt zu.
   *
   * @param product das hinzuzufügende Product-Objekt
   */
  public assignProductToActualOrder(product: Product) {
    let order = this.ordersService.getActualOrder();
    order?.products.push(product);
  }
}
