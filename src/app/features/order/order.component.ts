import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {}

  @Input() order;

  public showAddressForm = false;

  /**
   * @returns Liefert den zu zahlenden Betrag für die bestellten Produkte.
   */
  public getTotalAmoutEur() {
    return this.ordersService.getTotalAmountEur();
  }

  /**
   * Entfernt "product" aus der aktuellen Bestellung.
   *
   * @param product zu entfernendes Produkt aus der aktuellen Bestellung
   */
  public removeProductFromActualOrder(product: Product) {
    this.ordersService.removeProductFromActualOrder(product);
  }

  /**
   * Setzt "this.showAddressForm" auf "true".
   */
  public setAddressFormVisible() {
    this.showAddressForm = true;
  }
}
