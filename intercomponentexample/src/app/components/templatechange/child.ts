import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'child-template-comp',
  template: `
    <h1>Under this title is the injected HTML from the parent</h1>
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.Native

})
export class ChildTemplateComponent {
}
