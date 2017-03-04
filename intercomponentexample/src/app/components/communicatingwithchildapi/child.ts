import { Component} from '@angular/core';

@Component({
  selector: 'child-com-component',
  template: `
    <h2>Child 1</h2>
  `,
})
export class ChildComComponent {
    greet(greetings: string) {
        console.log('Hi from ${greetings}');
    }
}