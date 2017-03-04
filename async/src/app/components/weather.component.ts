import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'weather-comp',
  templateUrl: './weather.component.html',
})
export class WeatherComponent {
    searchInput: FormControl = new FormControl(' ');

    constructor() {
        this.searchInput.valueChanges
            .debounceTime(500)
            .switchMap(input => this.returnData(input))
            .subscribe( result => console.log(`promise result is ${result}`));
    }

    returnData(input: string) {
        return new Promise<string>(resolve => {
            setTimeout(resolve(input), 750);
        });
    }
}