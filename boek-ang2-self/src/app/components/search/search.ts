import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { positiveNumberValidator } from '../../shared/validators/validator';

@Component({
  selector: 'auction-search',
  templateUrl: './search.html'
})
export class SearchComponent implements OnInit {
  categories: string[];
  formModel: FormGroup;
  formBuilder: FormBuilder = new FormBuilder();

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.categories = this.service.getAllCategories();
    this.formModel = this.formBuilder.group({
      'title': [null, Validators.minLength(3)],
      'price': [null, positiveNumberValidator],
      'category': [-1]
    });
  }

  onSearch() {
    if(this.formModel.valid) {
      console.log(this.formModel.value);
    }
    else {
      console.log('Form is not valid');
    }
  }
}
