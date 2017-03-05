import { Component, OnInit  } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ssnValidator, equalValidator } from '../../shared/custom-validator';

@Component({
  selector: 'form-refactored-formbuilder-comp',
  templateUrl: './refactored-template.component.html',
})
export class RefactoredReactiveComponent implements OnInit {
    fb: FormBuilder = new FormBuilder();
    formModel: FormGroup;
    ngOnInit() {
        this.formModel = this.fb.group({
            'username': ['', Validators.required],
            'ssn': ['', ssnValidator],
            'passwordsGroup': this.fb.group({
                'password': ['', Validators.minLength(5)],
                'pconfirm': ['', equalValidator]
            })
        });
    }

    ngOnSubmit() {
        if(this.formModel.valid) {
            console.log("submitting form information");
        }
        else {
            console.log("")
        }
    }
}
