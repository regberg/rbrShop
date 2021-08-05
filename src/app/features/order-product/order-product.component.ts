import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css'],
})
export class OrderProductComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  @Input() prod;
  @Input() disableTrash;

  @Output() removeProductFromActualOrderEventEmitter =
    new EventEmitter<Product>();

  public faTrashAlt = faTrashAlt;

  /**
   * Sendet bei Klick auf das Papierkorbsymbol ein Event mit dem zu löschenden Product-Objekt.
   */
  public clickOnTrash() {
    this.removeProductFromActualOrderEventEmitter.emit(this.prod);
  }
}
