import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.css']
})
export class HeaderCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public shoppingCartIcon = faShoppingCart;
  @Input() count: number;

}
