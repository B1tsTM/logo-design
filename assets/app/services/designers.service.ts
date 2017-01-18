import { Injectable } from '@angular/core';
import { Contest } from '../models/contest';
import { User } from '../models/user';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DesignersService {
  contests = [];
  designers = [];
  constructor(private http: Http) { }

  getDesigners() {
      return this.http.get('http://localhost:3000/api/v1/dizaineriai')
        .map(res => {
          const data = res.json().obj;
          return data;
        })
        .catch(error => Observable.throw(error.json()));
    }

    getFilteredDesigners(searchString: string) {
    if(searchString.match(/^\s+$/) || !searchString) { // If all whitespace or empty string
      return this.http.get('http://localhost:3000/api/v1/dizaineriai')
      .map(res => {
        const data = res.json().obj;
        return data;
      })
      .catch(error => Observable.throw(error.json()));
    } else {
    return this.http.get('http://localhost:3000/api/v1/dizaineriai/filter/' + searchString)
      .map(res => {
        return res.json().obj;
      })
      .catch(error => Observable.throw(error.json()));
      }
  }

   getIndividualDesigner(nickname: any) {
    return this.http.get('http://localhost:3000/api/v1/dizaineriai/' + nickname)
      .map(res => {
        const data = res.json().obj;
        return data;
      })
      .catch(error => Observable.throw(error.json()));
  }

}