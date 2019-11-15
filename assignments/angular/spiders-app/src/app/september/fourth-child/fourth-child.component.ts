import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-child',
  template: `
    <p>
      fourth-child works!
    </p>
  `,
  styles: []
})
export class FourthChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
