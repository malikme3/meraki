import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  message = 'Hello';

  constructor(private http: HttpClient) {}

  getUser() {
    const res = this.http.get('https://api.github.com/users/koushikkothagal');
    res.subscribe((resp: any) => {
      console.log('Res returned', resp);
      return resp;
    });
  }
}
