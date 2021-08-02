import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {}

  /**
   * @returns Liefert die getätigten Bestellungen.
   */
  public getOrders() {
    return this.ordersService.getOrders();
  }
}
