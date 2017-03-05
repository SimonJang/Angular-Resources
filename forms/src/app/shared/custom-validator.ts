import { FormControl, FormGroup } from '@angular/forms';

// RxJs imports
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';



// Single field validator
export function ssnValidator(control: FormControl) {
    const value = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : { ssn: true }; // null = no errors
}

// Async validator
export function asyncssnValidator(control: FormControl): Observable<any> {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return Observable.of(valid ? null : { ssn: true }).delay(5000);
}

// Multiple field validator
export function equalValidator({value}: FormGroup): {[key: string]: any} {
    const [first, ...rest] = Object.keys(value || '');
    const valid = rest.every(v => value[v] === value[first]);
    return valid ? null : {equal: true};
}
