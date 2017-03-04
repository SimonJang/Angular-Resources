import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComComponent } from './child'; 

@Component({
  selector: 'parent-com-component',
  template: `
    <h1>Exposing child API</h1>
    <button (click)="child2.greet('child2')">Invoke greet on child 2</button>
    <child-com-component #child1></child-com-component>
    <child-com-component #child2></child-com-component>
  `,
})
export class ParentComComponent implements AfterViewInit {
    @ViewChild('child1') firstChild: ChildComComponent;
    ngAfterViewInit() {
        this.firstChild.greet('child 1');
    }
}