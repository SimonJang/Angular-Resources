import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput: FormControl = new FormControl('');
  constructor() {
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe((inputVal) => this.getStockValue(inputVal));
  }
  getStockValue(input: string) {
    console.log(`The price of ${input} is ${(100 * Math.random()).toFixed(4)}`);
  }
}
