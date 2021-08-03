import { Component, Input, OnInit } from '@angular/core';
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

  /**
   * @returns Liefert den zu zahlenden Betrag für die bestellten Produkte.
   */
  public getTotalAmoutEur() {
    return this.ordersService.getTotalAmountEur();
  }
}
