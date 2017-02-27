import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product-service';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'home-comp',
  templateUrl: './home.component.html',
  styleUrls : ['./home.component.css']
})
export class HomeComponent {
    products: Product[] = [];
    titleFilter: FormControl = new FormControl();
    filterCriteria: String;

    constructor(private service: ProductService) {
        this.products = service.getProducts();
        this.titleFilter.valueChanges
            .debounceTime(100)
            .subscribe(value => this.filterCriteria = value, error => console.error(error));
    }
}