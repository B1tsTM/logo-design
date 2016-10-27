import { Injectable, EventEmitter } from '@angular/core';
import { Contest } from '../models/contest';
import { User } from '../models/user';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  contests = [];
  designers = [];
  constructor(private http: Http) { }

  getContestSubmitions(id: string) {
    return this.http.get('http://localhost:3000/api/v1/submitions/contest/'+id)
      .map(res => {
        console.log('submitions from apiservice');
        console.log(res.json());
        const data = res.json().submitions;
        console.log('apiService data variable');
        console.log(data);
          let submitions: any[] = [];
          for(let i=0; i< data.length; i++) {
            //let designer = new User(data[i].email, data[i].password, data[i].userType, data[i].firstName, data[i].lastName, data[i].contestsWon, data[i].designsCreated, data[i].publicDesigns);
            let submition = {submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating};
            console.log('submition in loop');
            console.log(submition);
            submitions.push(submition);
          };
          console.log('submitions after loop');
          console.log(submitions);
          return submitions;

        // var submitions = res.json().submitions;
        // console.log(submitions);
        // return submitions;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getMySubmitions(contestId: string) {
    return this.http.get('http://localhost:3000/api/v1/submitions/contest/'+contestId)
      .map(res => {
        console.log('MySubmitions from apiservice');
        console.log(res.json());
        const data = res.json().submitions;
        console.log('apiService data variable for MySubmitions');
        console.log(data);
          let userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';
          let mySubmitions: any[] = [];
          for(let i=0; i< data.length; i++) {
            console.log('submition author');
            console.log(data[i].submitionAuthor);
            if (data[i].submitionAuthor._id == userId) {
            let mySubmition = {submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating};
            console.log('MySubmition in loop');
            console.log(mySubmition);
            mySubmitions.push(mySubmition);
            }
          };
          console.log('MySubmitions after loop');
          console.log(mySubmitions);
          return mySubmitions;

        // var submitions = res.json().submitions;
        // console.log(submitions);
        // return submitions;
      })
      .catch(error => Observable.throw(error.json()));
  }

}