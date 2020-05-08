import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/components/product/product.service';
import { Product } from '../../components/product/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  products: Product[]

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.products
  }

}
