import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child.component.html',
})
export class ChildComponent {
    @Input() externalString: string;
}
