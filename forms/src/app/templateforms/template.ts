import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'temp-form',
  templateUrl: './template.html',
})
export class TemplateFormComponent {
  onSubmit(formValue: any) {
      console.log(formValue);
      console.log(formValue.username);
      console.log(formValue.ssn);
  }
}
