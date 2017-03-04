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

    newComment: string;
    newRating: number;

    isReviewHidden: boolean = true;

    constructor(private _route: ActivatedRoute, private _service: ProductService) {
        let prodId: number = parseInt(_route.snapshot.params['productId']);
        this.product = _service.getProductById(prodId);
        this.reviews = _service.getReviewsForProduct(prodId);
    }

    addReview() {
        const review = new Review(0, this.product.id, new Date(), 'Anonymous'
        , this.newRating, this.newComment);
        console.log("Adding review", JSON.stringify(review));
        this.reviews = [...this.reviews, review];
        this.product.rating = this.averageProductRating(this.reviews);
        this.resetForm();
    }

    averageProductRating(reviews: Review[]) {
        const sum = reviews.reduce((average, review) => average + review.rating, 0);
        return sum / reviews.length;
     }

     resetForm() {
        this.newRating = 0;
        this.newComment = null;
        this.isReviewHidden = true;
    }
}