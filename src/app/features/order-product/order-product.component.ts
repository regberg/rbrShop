import { Component, Input, OnInit } from '@angular/core';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css'],
})
export class OrderProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() prod;
}
