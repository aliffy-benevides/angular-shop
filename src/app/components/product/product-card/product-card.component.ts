import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product

  constructor() { }

  ngOnInit(): void {
  }

}
