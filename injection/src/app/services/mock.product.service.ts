import { Injectable } from '@angular/core'
import { Product } from '../shared';
import { Http } from '@angular/http';

import { ProductService } from './product.service';

import 'rxjs/add/operator/map';

@Injectable()
export class MockProductService implements ProductService {
  products: Product[]

  getProduct(): Product {
    return new Product( 0, "Samsung", 499.99, "The latest Samsung, 6.7-inch screen");
  }
}