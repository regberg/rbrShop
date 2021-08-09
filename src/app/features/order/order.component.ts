import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status.enum';
import { Address } from 'src/app/shared/interfaces/address.interface';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void { }

  @Input() order;
  @Input() totalAmountOrderEur;

  public showAddressForm = false;
  public address: Address;

  /**
   * Entfernt "product" aus der aktuellen Bestellung.
   *
   * @param product zu entfernendes Produkt aus der aktuellen Bestellung
   */
  public removeProductFromActualOrder(product: Product) {
    this.ordersService.removeProductFromActualOrder(product);
  }

  /**
   * Setzt "this.showAddressForm" auf "isVisible".
   */
  public setAddressFormVisible(isVisible: boolean) {
    this.showAddressForm = isVisible;
  }

  /**
   * - Setzt die Bestelladresse.
   * - Zeigt die Bestellansicht an.
   * - Aktualisiert das Warenkorbsymbol im Headerbereich.
   * - Setzt den Status von "this.order" auf "Status.completed".
   * - Setzt die aktuelle Bestellung auf NULL.
   */
  public completeOrder(address: Address) {
    this.address = address;

    this.setAddressFormVisible(false);
    this.ordersService.setActualAmountOfActualOrderProducts();
    this.ordersService.setStatusOfOrder(this.order.id, Status.completed);
    this.ordersService.resetActualOrder();
  }

  /**
   * Überprüft, ob "this.order.status" den Wert "Status.completed" hat.
   */
  public isOrderCompleted() {
    return this.order.status === Status.completed;
  }
}
