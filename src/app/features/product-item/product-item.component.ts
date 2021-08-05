import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faCaretSquareDown,
  faCaretSquareUp,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  @Input() product: Product;
  @Output() assignProductToActualOrderEventEmitter = new EventEmitter<Product>();

  public faCaretSquareDown = faCaretSquareDown;
  public faCaretSquareUp = faCaretSquareUp;
  public faCartPlus = faCartPlus;
  public showLongDescription = false;

  /**
   * Sendet bei Klick auf das Warenkorbsymbol das ausgewählte Product-Objekt
   * und verwertet dieses weiter in der übergeordneten ProductsComponent.
   */
  public clickOnCart() {
    this.assignProductToActualOrderEventEmitter.emit(this.product);
  }

  /**
   * @returns Liefert true, falls das Produkt mengenmäßig noch vorhanden ist.
   */
  isProductAvailable() {
    return this.product.amount > 0;
  }
}
