import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spiders-app';
  testDebugging() {
    this.title = 'browser preview works!!'; // set a breakpoint here
  }
}
