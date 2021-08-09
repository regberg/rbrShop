import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order.interface';
import { Status } from '../enums/status.enum';
import { CalculationService } from './calculation.service';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private index = 0;
  public orders: Order[] = [];
  private actualOrder;

  constructor(private calcService: CalculationService) { }

  /**
   * Erzeugt ein neues Order-Objekt und fügt es "this.orders" hinzu.
   *
   * @param name Name des Order-Objekts
   */
  public createNewOrderAndAddToOrders(name?: string) {
    const newOrder: Order = {
      id: this.index++,
      name,
      products: [],
      date: new Date(),
      status: Status.actual,
    };

    this.actualOrder = newOrder;
    this.orders.push(this.actualOrder);
  }

  /**
   * @returns liefert das erste Order-Objekt mit aktuellem Status aus dem absteigend nach Datum sortierten Order-Array.
   */
  public setActualOrder() {
    if (this.actualOrder === undefined || this.actualOrder === null) {
      this.sortOrdersByDate();

      if (
        this.orders !== undefined &&
        this.orders !== null &&
        this.orders.length > 0
      ) {
        this.actualOrder = this.orders.find(
          (order) => order.status === Status.actual
        );
      } else {
        this.actualOrder = null;
      }
    }
  }

  /**
   * Sortiert "this.orders" absteigend nach Datum.
   *
   * @returns liefert 0, 1, -1 je nach Datum der zu sortierenen Order-Objekte.
   */
  private sortOrdersByDate() {
    if (
      this.orders != undefined &&
      this.orders != null &&
      this.orders.length > 0
    ) {
      this.orders.sort((o1, o2) => {
        if (o1.date && o2.date) {
          if (o1.date > o2.date) {
            return -1;
          } else if (o1.date < o2.date) {
            return 1;
          }
        }

        return 0;
      });
    }

    return 0;
  }

  /**
   * Setzt "this.actualOrder" auf NULL.
   */
  public resetActualOrder() {
    this.actualOrder = null;
  }

  /**
   * @returns Liefert die Bestellung mit Status "actual".
   */
  public getActualOrder() {
    return this.actualOrder;
  }

  /**
   * @returns Liefert die getätigten Bestellungen.
   */
  public getOrders() {
    return this.orders;
  }

  /**
   * Setzt den Status des Order-Objekts mit id "orderId" entsprechend "status".
   *
   *  @param orderId id des zu ändernden Order-Objects
   *
   * @param status der zu setzende Statuswert
   */
  public setStatusOfOrder(orderId: number, status: Status): void {
    let order: Order = this.getOrderById(orderId);

    if (order) {
      order.status = status;
    }
  }

  /**
   * @param orderId id des gesuchten Order-Objects
   *
   * @returns Liefert das Order-Object mit der id "orderId"
   */
  private getOrderById(orderId: number) {
    return this.orders.find((o) => o.id === orderId);
  }

  /**
   * Aktualisiert die vorhandene Menge der Produkte der aktuellen Bestellung.
   */
  public setActualAmountOfActualOrderProducts() {
    this.actualOrder?.products.forEach((p) => {
      if (p.amount > 0) {
        p.amount -= 1;
      }
    });
  }

  /**
   * @returns Liefert die Anzahl der Produkte,
   * die dem aktuellen Order-Objekt zugeordnet sind.
   */
  public getActualOrderProductCount() {
    let actualOrderProductCount = this.getActualOrder()?.products
      ? this.getActualOrder().products.length
      : 0;

    return actualOrderProductCount;
  }

  /**
   * Entfernt "product" aus der aktuellen Bestellung.
   *
   * @param product zu entfernendes Produkt aus der aktuellen Bestellung
   */
  public removeProductFromActualOrder(product: Product) {
    let index = this.actualOrder?.products.findIndex(
      (p) => p.id === product.id
    );

    if (index >= 0) {
      this.actualOrder?.products.splice(index, 1);
    }
  }

  /**
   * @returns Liefert den zu zahlenden Betrag in EUR für die bestellten Produkte.
   */
  public getTotalAmountEur(orderId: number) {
    let totalAmountEur = 0;

    this.getOrderById(orderId)?.products.forEach(
      (prod) =>
      (totalAmountEur += this.calcService.convertToEuro(
        prod.price,
        prod.currency
      ))
    );

    return totalAmountEur;
  }
}

/**
 * Hilfsfunktionen
 */

/**
 * @returns Liefert das erste Order-Objekt mit aktuellem Status.
 */
function findActualOrder(): Order {
  for (let index = 0; index < this.orders.length; index++) {
    const order: Order = this.orders[index];

    if (order.status === Status.actual) {
      return order;
    }
  }
}
