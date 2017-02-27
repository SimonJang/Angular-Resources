import { Injectable } from '@angular/core'
import { Product } from '../shared';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  products: Product[]

  /** Dummy constructor, werkt niet 100% want probleem met request */
  /*
  constructor(private _http: Http) {
    _http.get('products.json').subscribe(product => this.products.push()); // Fake call
  }
  */

  getProduct(): Product {
    return new Product( 0, "iPhone 7", 249.99, "The latest iPhone, 7-inch screen");
  }
}