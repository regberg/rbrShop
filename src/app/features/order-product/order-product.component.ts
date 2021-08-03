import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css'],
})
export class OrderProductComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  @Input() prod;

  public faTrashAlt = faTrashAlt;
}
