import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Product, ProductService, Review } from '../../services/product-service';

@Component({
  selector: 'auction-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
    product: Product;
    reviews: Review[];

    constructor(private _route: ActivatedRoute, private _service: ProductService) {
        let prodId: number = parseInt(_route.snapshot.params['productId']);
        this.product = _service.getProductById(prodId);
        this.reviews = _service.getReviewsForProduct(prodId);
    }
}