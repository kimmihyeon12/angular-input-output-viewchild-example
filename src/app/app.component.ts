import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  // parent: string = 'hello world';
  parent: string = '';
  addString(value: string) {
    console.log(value);
    this.parent = value;
  }
}
