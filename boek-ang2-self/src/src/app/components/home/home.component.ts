import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product-service';

@Component({
  selector: 'home-comp',
  templateUrl: './home.component.html',
  styleUrls : ['./home.component.css']
})
export class HomeComponent {
    products: Product[] = [];
    constructor(private service: ProductService) {
        this.products = service.getProducts();
    }
}