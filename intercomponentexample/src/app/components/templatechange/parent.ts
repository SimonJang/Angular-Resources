import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'parent-template-comp',
  template: `
    <h1>Under this title is the child component</h1>
    <child-template-comp>
        <div>I am injected</div>
    </child-template-comp>
  `,
  encapsulation: ViewEncapsulation.Native

})
export class ParentTemplateComponent {}