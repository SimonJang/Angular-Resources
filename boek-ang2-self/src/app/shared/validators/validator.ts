import { FormControl } from '@angular/forms';

export function positiveNumberValidator(control: FormControl): any {
    // When no value then ok for validator
    if (!control.value) return null;

    const price = parseInt(control.value);
    return price === null ||
        typeof price === 'number' &&
            price > 0 ? null : {positivenumber: true};
}