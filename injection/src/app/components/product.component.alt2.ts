import { Component, OpaqueToken, Inject } from '@angular/core';

import { Product } from '../shared';

import { ProductService } from '../services/product.service'
import { MockProductService } from '../services/mock.product.service';

export const selectedService = new OpaqueToken('IS_DEV_ENV'); // OpaqueToken moet met string object
                                                              // Werkt niet met boolean

@Component({
  selector: 'product-component-alt2',
  templateUrl: './product.component.html',
  providers: [{provide: ProductService, useFactory: (isDev) => { // (isDev) => is gelijk aan function(isDev) {…}
    if(isDev) {
      return new MockProductService;
    }
    else {
      return new ProductService
    }
  }, deps: [selectedService]}]
})
export class ProductComponentAlt2 {
  product: Product;
  constructor(@Inject(selectedService) private _service: ProductService ) {
     this.product = _service.getProduct()
  }
}