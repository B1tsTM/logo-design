import { Injectable, EventEmitter } from '@angular/core';
import { Contest } from '../models/contest';
import { User } from '../models/user';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ContestsService {
  contests = [];
  designers = [];
  messageEdited = new EventEmitter<Contest>();
  constructor(private http: Http) { }

  getContests() {
    return this.http.get('http://localhost:3000/api/v1/konkursai')
      .map(res => {
        console.log(res.json());
//        const data = res.json().obj;
        const data = res.json().obj;
        let objs: any[] = [];
        for(let i=0; i< data.length; i++) {
          let contest = new Contest(data[i].name, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitions, data[i].daysRemaining, data[i].user.firstName, data[i].user._id);
          objs.push(contest);
        };
        return objs;
      })
      .catch(error => Observable.throw(error.json()));
  }

  addContest(contest: Contest) {
    const body = JSON.stringify(contest);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    return this.http.post("http://localhost:3000/konkursai" + token, body, {headers: headers})
    .map(res => {
      const data = res.json().obj;
      let contest = new Contest(data.name, data._id, data.category, data.description, data.award, data.status, data.submitions, data.daysRemaining, data.user.firstName, data.user._id);
      return contest;
    })
    .catch(error => Observable.throw(error.json()));
  }

  updateContest(contest: Contest) {
    const body = JSON.stringify(contest);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    return this.http.patch("http://localhost:3000/konkursai/" + contest.id + token, body, {headers: headers})
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }
  

  editContest(contest: any) {
    this.messageEdited.emit(contest);
  }

  deleteContest(contest: any) {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    this.contests.splice(this.contests.indexOf(contest), 1);
    return this.http.delete("http://localhost:3000/konkursai/" + contest.id + token)
      .map(res => res.json())
      .catch(error => Observable.throw(error.json()));
  }

  getDesigners() {
    return this.http.get('http://localhost:3000/api/v1/dizaineriai')
      .map(res => {
        console.log(res.json());
//        const data = res.json().obj;
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