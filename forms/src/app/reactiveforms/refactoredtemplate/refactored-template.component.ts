import { Component, OnInit  } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

import { ssnValidator, equalValidator } from '../../shared/custom-validator';

// With custom validators, see shared folder
@Component({
  selector: 'form-refactored-comp',
  templateUrl: './refactored-template.component.html',
})
export class RefactoredReactiveComponent implements OnInit {
    formModel: FormGroup;
    ngOnInit() {
        this.formModel = new FormGroup({
        'username': new FormControl('', Validators.required ),
        'ssn': new FormControl('', ssnValidator),
        'passwordsGroup': new FormGroup({
            'password': new FormControl('', Validators.minLength(5)),
            'pconfirm': new FormControl('', equalValidator)
            })
        });
    }
    ngOnSubmit() {
        if(this.formModel.valid) {
            console.log("submitting form information");
        }
        else {
            console.log("form is invalid")
        }
    }
}
