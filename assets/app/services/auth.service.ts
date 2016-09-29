import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Designer } from '../models/designer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signup(designer: Designer) {
    const body = JSON.stringify(designer);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/registracija', body, {headers:headers})
      .map(res => {
        const data = res.json().obj;
        let designer = new Designer(data.email, data.password, data.firstName, data.lastName);
        return designer;

      })
      .catch(error => Observable.throw(error.json()));
  }

  signin(designer: Designer) {
    console.log(designer);
    const body = JSON.stringify(designer);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/prisijungti', body, {headers:headers})
      .map(res => {
        var token = res.json().token;
        var designerId = res.json().designerId;
        return {token: token, designerId: designerId};
        
      })
      .catch(error => Observable.throw(error.json()));
  }
  }

}