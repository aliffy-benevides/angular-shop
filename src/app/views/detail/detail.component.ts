import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/components/product/product.service';
import { CartService } from 'src/app/components/cart/cart.service';
import { Product } from '../../components/product/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  product: Product

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const productId: number = +this.route.snapshot.paramMap.get('id')
    this.product = this.productService.products.find(p => p.id == productId)
  }

  get messageClass(): string {
    if (this.cartService.ItemAmount(this.product.id) < 10) {
      return "msg-red"
    } else {
      return "msg-green"
    }
  }

  get message(): string {
    if (this.cartService.ItemAmount(this.product.id) < 10) {
      return "Aviso. Comprar abaixo de 10 itens não tem desconto"
    } else {
      return "Seu desconto aparecerá no checkout"
    }
  }

  get totalPrice(): number {
    return this.cartService.ItemAmount(this.product.id) * this.product.price
  }
}
