import { Product } from '../product/product.model';

export interface CartItem {
    id: number,
    amount: number,
    product?: Product,
    totalPrice?: number
}
