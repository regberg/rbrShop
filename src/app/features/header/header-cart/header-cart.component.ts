import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.css'],
})
export class HeaderCartComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {}

  public shoppingCartIcon = faShoppingCart;

  /**
   * @returns Liefert die Anzahl der Produkte,
   * die dem aktuellen Order-Objekt zugeordnet sind.
   */
  public getActualOrderProductCount() {
    return this.ordersService.getActualOrderProductCount();
  }
}
