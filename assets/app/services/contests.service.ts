import { Injectable } from '@angular/core';
import { Contest } from '../models/contest';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ContestsService {
  contests = [];
  constructor(private http: Http) { }

  getContests() {
    return this.contests;
  }

  addContest(contest: Contest) {
    const body = JSON.stringify(contest);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post("http://localhost:3000/konkursai", body, {headers: headers})
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }

  editContest(contest: any) {
    this.contests[this.contests.indexOf(contest)] = new Contest('Edited', 'edit', 'edit');
  }

  deleteContest(contest: any) {
    this.contests.splice(this.contests.indexOf(contest), 1);
  }
}