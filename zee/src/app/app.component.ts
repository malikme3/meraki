import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zee bank';
  accountInfo = null;
  constructor(private accountService: AccountService) {
    this.accountInfo = accountService.accountsDetails;
  }
}
