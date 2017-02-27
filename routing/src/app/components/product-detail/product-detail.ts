import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'product-detail-comp',
  templateUrl: './product-detail.html',
  styles: ['h1 { background-color: green; }']
})
export class ProductDetailComponent {
  title = 'ProductDetail Component';
  productId: String;

  constructor(private route: ActivatedRoute) {
      this.productId = route.snapshot.params['id'];
  }
}