import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishwasher',
  template: `
    <p>
      dishwasher works!
    </p>
  `,
  styles: [
    `
      p: {
        color: red;
      }
    `,
  ],
})
export class DishwasherComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
