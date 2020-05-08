import { CartService } from './../../components/cart/cart.service';
import { ProductService } from './../../components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/components/cart/cart.model';
import { Product } from 'src/app/components/product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cartSetvice: CartService
  ) { }

  ngOnInit(): void {
  }

  get cart(): CartItem[] {
    return this.cartSetvice.cart.map(ci => {
      return this.cartSetvice.GetCompleteCartItem(ci.id)
    })
  }
}
