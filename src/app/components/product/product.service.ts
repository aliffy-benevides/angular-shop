import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: "Produto 1",
      price: 1000.37,
      amount: 7,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Dignissim cras tincidunt lobortis feugiat vivamus."
    },
    {
      id: 2,
      name: "Produto 2",
      price: 2.37,
      amount: 13,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Dignissim cras tincidunt lobortis feugiat vivamus."
    },
    {
      id: 3,
      name: "Produto 3",
      price: 3.37,
      amount: 1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Dignissim cras tincidunt lobortis feugiat vivamus."
    },
    {
      id: 4,
      name: "Produto 4",
      price: 1.70,
      amount: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Dignissim cras tincidunt lobortis feugiat vivamus."
    },
    {
      id: 5,
      name: "Produto 5",
      price: 1.23,
      amount: 7,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Dignissim cras tincidunt lobortis feugiat vivamus."
    },
    {
      id: 6,
      name: "Produto 6",
      price: 1.89,
      amount: 45,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Dignissim cras tincidunt lobortis feugiat vivamus."
    },
    {
      id: 7,
      name: "Produto 7",
      price: 4.37,
      amount: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Dignissim cras tincidunt lobortis feugiat vivamus."
    },
    {
      id: 8,
      name: "Produto 8",
      price: 3.51,
      amount: 7,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Dignissim cras tincidunt lobortis feugiat vivamus."
    }
  ]

  constructor() { }
}
