import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { ssnValidator } from './custom-validator';

// [] wil zeggen dat het als attribuut kan worden gebruikt

@Directive({
    selector: '[ssn]',
    providers: [{
        provide: NG_VALIDATORS,
        useValue: ssnValidator,
        multi: true
    }]
})

export class SsnValidatorDirective { }