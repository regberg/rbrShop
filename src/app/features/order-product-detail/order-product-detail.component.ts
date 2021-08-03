import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-order-product-detail',
  templateUrl: './order-product-detail.component.html',
  styleUrls: ['./order-product-detail.component.css'],
})
export class OrderProductDetailComponent implements OnInit {
  public product: Product;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productsService: ProductsService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.product = this.productsService.getProductById(parseFloat(params.id));
    });
  }
}
