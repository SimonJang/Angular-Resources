import { Component  } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'form-array-comp',
  templateUrl: './fa-example.component.html',
})
export class FormArrayComponentExample {
    formModel: FormGroup = new FormGroup({
        emails: new FormArray([
            new FormControl()
        ])
    });

    // Pusht nieuwe FormControl object in FormArray
    addEmail(formControl: FormControl) {
        const emails = this.formModel.get('emails') as FormArray;
        emails.push(new FormControl());
    }
}
