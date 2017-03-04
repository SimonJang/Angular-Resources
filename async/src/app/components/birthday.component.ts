import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { customUppercasePipe } from '../pipes/custom.uppercase.pipe';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'birthday-comp',
  templateUrl: './birthday.component.html',
})
export class BirthdayComponent {
    birthday = '11-09-1987';
};