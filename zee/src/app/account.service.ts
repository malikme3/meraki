import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accountsDetails = {
    bankName: 'Zee Bank',
    userName: 'Zulifqar Ahmad',
    companyName: 'Coding Point',
    debit: {
      balance: 205000,
      accNumber: 7864561234,
      cardName: 'Zulfi - debit account',
    },
    credit: {
      limit: 80000,
      cardNumber: 4560009989,
      cardName: 'Zulfi - credit account',
    },
  };

  constructor() {}
}
