import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order.interface';
import { Status } from '../enums/status.enum';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  public orders: Order[] = [];
  private index = 0;
  private actualOrder;

  constructor() { }

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

    this.orders.push(newOrder);
  }

  /**
   * @returns liefert das erste Order-Objekt mit aktuellem Status aus dem absteigend nach Datum sortierten Order-Array.
   */
  public getActualOrder() {
    if (this.actualOrder === undefined || this.actualOrder === null) {
      this.sortOrdersByDate();
      this.actualOrder = this.orders.find(
        (order) => order.status === Status.actual
      );
    }

    return this.actualOrder;
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
   * @returns Liefert die Anzahl der Produkte,
   * die dem aktuellen Order-Objekt zugeordnet sind.
   */
  public getActualOrderProductCount() {
    return this.getActualOrder().products.length;
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