import { Component, OnInit } from '@angular/core';

import { CartService } from './../../cart/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  get totalItemsInCart(): number {
    return this.cartService.CountItemsInCart()
  }
}
