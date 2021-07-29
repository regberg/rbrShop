import { Component, Input, OnInit } from '@angular/core';
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

  public faCaretSquareDown = faCaretSquareDown;
  public faCaretSquareUp = faCaretSquareUp;
  public faCartPlus = faCartPlus;
  public showLongDescription = false;

  /**
   * clickOnCart
   */
  public clickOnCart() {
    console.log("###################TEST");
  }
}