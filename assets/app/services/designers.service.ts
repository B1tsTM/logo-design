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
          // let objs: any[] = [];
          // for(let i=0; i< data.length; i++) {
          //   let designer = new User(data[i].nickName, data[i].password, data[i].userType, data[i].firstName, data[i].lastName, data[i].email, data[i].designsCreated, data[i].publicDesigns);
          //   objs.push(designer);
          // };
          // return objs;
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
        console.log(res.json());
        return res.json().obj;
      })
      .catch(error => Observable.throw(error.json()));
      }
  }

   getIndividualDesigner(nickname: any) {
    return this.http.get('http://localhost:3000/api/v1/dizaineriai/' + nickname)
      .map(res => {
        console.log(res.json());
        const data = res.json().obj;
        //let contest = new Contest(data.name, data.uniqueId, data.idName, data._id, data.category, data.description, data.award, data.status, data.submitionCount, data.daysRemaining, data.startDate, data.endDate, data.submitions, data.publisher);
        //return contest;
        return data;
      })
      .catch(error => Observable.throw(error.json()));
  }

}