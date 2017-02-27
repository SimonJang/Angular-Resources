import { Component } from '@angular/core';
import { Product } from '../shared';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  product: Product;
  constructor(private _service: ProductService ) {
     this.product = _service.getProduct()
  }
}