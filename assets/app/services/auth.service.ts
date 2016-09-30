import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/registracija', body, {headers:headers})
      .map(res => {
        const data = res.json().obj;
        let user = new User(data.email, data.password, data.userType ,data.firstName, data.lastName);
        return user;

      })
      .catch(error => Observable.throw(error.json()));
  }

  signin(user: User) {
    console.log(user);
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/prisijungti', body, {headers:headers})
      .map(res => {
        var token = res.json().token;
        var userId = res.json().userId;
        return {token: token, userId: userId};
        
      })
      .catch(error => Observable.throw(error.json()));
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}