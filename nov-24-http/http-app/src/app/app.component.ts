import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-app';
  users = null;
  id = null;

  constructor(private http: HttpClient) {
    this.userName = us.message;
  }

  getUser() {
    const userRes = this.http.get(
      'https://jsonplaceholder.typicode.com/users/' + this.id
    );

    userRes.subscribe(res => {
      this.users = res;
    });
  }
}
