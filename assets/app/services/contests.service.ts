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
  contestEdited = new EventEmitter<Contest>();
  submitionDetails: any;
  contestWinner: any;
  mailTopic: string;
  constructor(private http: Http) { }

  getAllContests() {
    return this.http.get('http://localhost:3000/api/v1/konkursai')
      .map(res => {
        console.log(res.json());
//        const data = res.json().obj;
        const data = res.json().obj;
        let objs: any[] = [];
        for(let i=0; i< data.length; i++) {
          let contest = new Contest(data[i].name, data[i].uniqueId, data[i].idName, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitionCount, data[i].daysRemaining, data[i].startDate, data[i].endDate, data[i].submitions, data[i].publisher);
          objs.push(contest);
        };
        return objs;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getFilteredContests(searchString: string) {
    if(searchString.match(/^\s+$/) || !searchString) { // If all whitespace or empty string
      return this.http.get('http://localhost:3000/api/v1/konkursai')
      .map(res => {
        const data = res.json().obj;
        let objs: any[] = [];
        for(let i=0; i< data.length; i++) {
          let contest = new Contest(data[i].name, data[i].uniqueId, data[i].idName, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitionCount, data[i].daysRemaining, data[i].startDate, data[i].endDate, data[i].submitions, data[i].publisher);
          objs.push(contest);
        };
        return objs;
      })
      .catch(error => Observable.throw(error.json()));
    } else {
    return this.http.get('http://localhost:3000/api/v1/konkursai/filter/' + searchString)
      .map(res => {
        console.log(res.json());
        return res.json().obj;
      })
      .catch(error => Observable.throw(error.json()));
      }
  }

  getIndividualContests(id: any) {
    return this.http.get('http://localhost:3000/api/v1/konkursai')
      .map(res => {
        console.log(res.json());
//        const data = res.json().obj;
        const data = res.json().obj;
        let objs: any[] = [];
        for(let i=0; i< data.length; i++) {
          if (data[i].publisher._id == id) {
          let contest = new Contest(data[i].name, data[i].uniqueId, data[i].idName, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitionCount, data[i].daysRemaining, data[i].startDate, data[i].endDate, data[i].submitions, data[i].publisher);
          objs.push(contest);
          }
        };
        console.log('getIndividualContests objs after loop');
        console.log(objs);
        return objs;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getIndividualContest(id: any) {
    return this.http.get('http://localhost:3000/api/v1/konkursai/' + id)
      .map(res => {
        console.log(res.json());
        const data = res.json().obj;
        //let contest = new Contest(data.name, data.uniqueId, data.idName, data._id, data.category, data.description, data.award, data.status, data.submitionCount, data.daysRemaining, data.startDate, data.endDate, data.submitions, data.publisher);
        //return contest;
        return data;
      })
      .catch(error => Observable.throw(error.json()));
  }

  addContest(contest: Contest) {
    const body = JSON.stringify(contest);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : '';

    return this.http.post("http://localhost:3000/konkursai" + token, body, {headers: headers})
    .map(res => {
      const data = res.json().obj;
      //let contest = new Contest(data.name, data.uniqueId, data.idName, data._id, data.category, data.description, data.award, data.status, data.submitionCount, data.daysRemaining, data.startDate, data.endDate, data.submitions, data.publisher);
      //return contest;
      return data;
    })
    .catch(error => Observable.throw(error.json()));
  }

  updateContest(contest: Contest) {
    const body = JSON.stringify(contest);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : '';

    return this.http.patch("http://localhost:3000/konkursai/" + contest.id + token, body, {headers: headers})
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }
  

  editContest(contest: any) {
    this.contestEdited.emit(contest);
  }

  extendContest(contestId, days) {
    const body = JSON.stringify({days: days});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch('http://localhost:3000/api/v1/contests/' + contestId + '/extend', body, {headers: headers})
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }

  deleteContest(contest: any) {
    const token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : '';
    this.contests.splice(this.contests.indexOf(contest), 1);
    return this.http.delete("http://localhost:3000/konkursai/" + contest.id + token)
      .map(res => res.json())
      .catch(error => Observable.throw(error.json()));
  }

  updateSubmitionRating(contest: any, submition: any) {
    const body = JSON.stringify(submition);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : '';

    return this.http.patch("http://localhost:3000/api/v1/submitions/" + contest.idName + token, body, {headers: headers})
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }

  updateContestStatus(idName, status) {
    const body = JSON.stringify({idName: idName, status: status});
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : '';

    return this.http.patch("http://localhost:3000/api/v1/contests/update/status/" + idName + token, body, {headers: headers})
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }

  getWinnersGallery() {
    return this.http.get('http://localhost:3000/api/v1/contests/winners')
    .map(res => res.json().obj)
    .catch(error => Observable.throw(error.json()));
  }

  
}