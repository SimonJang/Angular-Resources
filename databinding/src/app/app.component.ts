import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Testing data binding in Angular"
  greeting: string = "A value";
  binding: string = "two way binding";

  show:boolean = false;

  onEvent(event: Event) {
    let inputElement: HTMLInputElement = <HTMLInputElement> event.target;
    console.log(inputElement.value);
    console.log(inputElement.getAttribute('value'));
    console.log(this.greeting);
  }
}
