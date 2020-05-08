import { Component, OnInit, Input } from '@angular/core';

import { CartService } from './../cart.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.sass']
})
export class AddItemComponent implements OnInit {
  @Input() id: number
  amount: number = 0

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.amount = this.cartService.ItemAmount(this.id)
  }

  HasItemInCart(): boolean {
    return this.cartService.HasItemInCart(this.id)
  }

  AddItem(): void {
    this.amount = this.cartService.AddItem(this.id)
  }

  RemoveItem(): void {
    this.amount = this.cartService.RemoveItem(this.id)
  }
}
