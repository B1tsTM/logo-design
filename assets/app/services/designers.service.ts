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
          console.log(res.json());
          const data = res.json().obj;
          let objs: any[] = [];
          for(let i=0; i< data.length; i++) {
            let designer = new User(data[i].email, data[i].password, data[i].userType, data[i].firstName, data[i].lastName);
        //   let designer = new Contest(data[i].name, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitions, data[i].daysRemaining, data[i].user.firstName, data[i].user._id);
            objs.push(designer);
          };
          return objs;
        })
        .catch(error => Observable.throw(error.json()));
    }

}