import { ProductService } from './../product/product.service';
import { Injectable } from '@angular/core';

import { CartItem } from './cart.model';
import { Product } from './../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[] = []

  constructor(
    private productService: ProductService
  ) { }

  HasItemInCart(id: number): boolean {
    const item = this.cart.find(i => i.id === id)
    return item && item.amount > 0
  }

  CountItemsInCart(): number {
    return this.cart.filter(i => i.amount > 0).length
  }

  ItemAmount(id: number): number {
    return this.cart.find(i => i.id === id)?.amount || 0 
  }

  AddItem(id: number): number {
    const product: Product = this.productService.products.find(p => p.id === id)
    if (product) {
      const item: CartItem = this.cart.find(i => i.id === id) || { id, amount: 0 }
      if (product.amount > item.amount) {
        item.amount = item.amount + 1
      }

      this.cart = this.cart.filter(i => i.id !== id && i.amount > 0)
      if (item.amount > 0) {
        this.cart.push(item)
      }

      return item.amount
    } else {
      return 0
    }
  }
  
  RemoveItem(id: number): number {
    const item: CartItem = this.cart.find(i => i.id === id)
    if (item) {
      if (item.amount > 0) {
        item.amount = item.amount - 1
      }
      
      this.cart = this.cart = this.cart.filter(i => i.id !== id && i.amount > 0)
      if (item.amount > 0) {
        this.cart.push(item)
      }

      return item.amount
    } else {
      return 0
    }
  }

  GetCompleteCartItem(id: number): CartItem {
    const item = this.cart.find(i => i.id === id)
    const product: Product = this.productService.products.find(p => p.id === id)
    if (!item || !product) {
      return null
    }

    item.product = product
    item.totalPrice = item.amount * product.price
    return item
  }
}
