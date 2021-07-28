import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void { }

  /**
   * @returns die Anzahl der Produkte
   */
  public getProductCount() {
    return this.productsService.getProductCount();
  }

  /**
   * @returns alle Produkte als Observable
   */
  public getAllProducts$() {
    return this.productsService.getAllProducts$();
  }
}
