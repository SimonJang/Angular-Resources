import { Component } from '@angular/core';
import { Product } from '../shared';
import { ProductService } from '../services/product.service'
import { MockProductService } from '../services/mock.product.service';

/** Met factory */

@Component({
  selector: 'product-component-alt',
  templateUrl: './product.component.html',
  providers: [{provide: ProductService, useFactory: (isDev) => { // (isDev) => is gelijk aan function(isDev) {…}
    if(isDev) {
      return new MockProductService;
    }
    else {
      return new ProductService
    }
  }, deps: ['IS_DEV_ENV']}]
})
export class ProductComponentAlt {
  product: Product;
  constructor(private _service: ProductService ) {
     this.product = _service.getProduct()
  }
}