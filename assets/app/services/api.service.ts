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
        //console.log('submitions from apiservice');
        //console.log(res.json());
        const data = res.json().submitions;
        //console.log('apiService data variable');
        //console.log(data);
          let submitions: any[] = [];
          for(let i=0; i< data.length; i++) {
            //let designer = new User(data[i].email, data[i].password, data[i].userType, data[i].firstName, data[i].lastName, data[i].contestsWon, data[i].designsCreated, data[i].publicDesigns);
            let submition = {submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating, submitionId: data[i].submitionId, status: data[i].status};
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
        //console.log('MySubmitions from apiservice');
        //console.log(res.json());
        const data = res.json().submitions;
        //console.log('apiService data variable for MySubmitions');
        //console.log(data);
          let userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';
          let mySubmitions: any[] = [];
          for(let i=0; i< data.length; i++) {
            //console.log('submition author');
            //console.log(data[i].submitionAuthor);
            if (data[i].submitionAuthor._id == userId) {
            let mySubmition = {submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating, sumbitionId: data[i].submitionId, status: data[i].status};
            //console.log('MySubmition in loop');
            //console.log(mySubmition);
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

  getWinnerSubmition(contestId) {
    return this.http.get('http://localhost:3000/api/v1/contest/' + contestId + '/winner')
      .map(res => {
        console.log('DEBUG service res.json()');
        console.log(res.json());
        return res.json().obj;
      })
      .catch(error => Observable.throw(error.json())); 
  }

  getUserInfo(userId: string) {
    return this.http.get('http://localhost:3000/api/v1/users/'+userId)
    .map(res => {
      const user = res.json().user;
      console.log('getUserInfo user var');
      console.log(user);
      return user;
    })
    .catch(error => Observable.throw(error.json()));
  }

  addComment(obj:any, contestId: string) {
    const body = JSON.stringify(obj);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch('http://localhost:3000/api/v1/contest/' + contestId, body, {headers: headers})
    .map(res => {
      const comments = res.json().obj.comments;
      console.log('api service addComment comments var');
      console.log(comments);
      return comments;
    })
    .catch(error => Observable.throw(error.json()));
  }

  addSubmitionComment(obj:any, contestId: string, submitionId: number) {
    const body = JSON.stringify(obj);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch('http://localhost:3000/api/v1/contest/' + contestId + '/submition/' + submitionId + '/comment', body, {headers: headers})
    .map(res => {
      const contest = res.json().obj;
      console.log('api service addComment contest var');
      console.log(contest);
      return contest;
    })
    .catch(error => Observable.throw(error.json()));
  }

  getComments(contestId: string) {
    return this.http.get('http://localhost:3000/api/v1/contest/' + contestId + '/comments')
    .map(res => {
      const comments = res.json().obj.comments;
      console.log('api service getComments comments var');
      console.log(comments);
      return comments;
    })
    .catch(error => Observable.throw(error.json()));
  }

  getSubmitionComments(contestId: string, submitionId: number) {
    return this.http.get('http://localhost:3000/api/v1/contest/' + contestId + '/submition/'+ submitionId + '/comments')
    .map(res => {
      console.log('RES JSON');
      console.log(res.json());
      const comments = res.json().obj;
      console.log('api service getComments comments var');
      console.log(comments);
      return comments;
    })
    .catch(error => Observable.throw(error.json()));
  }

  searchUsers(searchStr) {
    return this.http.get('http://localhost:3000/api/v1/search/' + searchStr)
      .map(res => res.json().obj)
      .catch(error => Observable.throw(error.json()));
  }

  sendMessage(recipient, topic, message, sender) {
    //var sender = localStorage.getItem('userId');
    var obj = {message: message, recipient: recipient, topic: topic, sender: sender};
    const body = JSON.stringify(obj);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch('http://localhost:3000/api/v1/message/' + recipient, body, {headers: headers})
      .map(res => {
          return res.json().obj;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getMessages(userId: string) {
    return this.http.get('http://localhost:3000/api/v1/messages/' + userId)
      .map(res => {
        return res.json().obj.messages; //no filtering
      })
      .catch(error => Observable.throw(error.json()));
  }

  deleteMessage(messageId: number) {
    var userId = localStorage.getItem('userId');
    return this.http.delete('http://localhost:3000/api/v1/message/' + userId + '/' + messageId)
    .map(res => {
      return res.json().obj.messages;
    })
    .catch(error => Observable.throw(error.json()));
  }

  changeMessageStatus(userId, messageId) {
    const body = JSON.stringify({status: 'Peržiūrėta'});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch('http://localhost:3000/api/v1/message/' + userId + '/' + messageId, body, {headers: headers})
      .map(res => {
        return res.json();
      })
      .catch(error => Observable.throw(error.json()));
  }

  selectWinner(contestIdName, submitionId, contestId, winnerId, submition) {
    const body = JSON.stringify({idName: contestIdName, submitionId: submitionId, contestId: contestId, winnerId: winnerId, submition: submition});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch('http://localhost:3000/api/v1/contest/winner/' + contestIdName + '/' + submitionId, body, {headers: headers})
      .map(res => {
        return res.json();
      })
      .catch(error => Observable.throw(error.json()));
  }

  // addWinningContest(contestId, winnerId) {
  //   console.log('DEBUG apiservice params');
  //   console.log('contestId: ' + contestId);
  //   console.log('winnerId: ' + winnerId);
  //   const body = JSON.stringify({winnerId: winnerId, contestId: contestId});
  //   const headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.patch('http://localhost:3000/api/v1/contest/winner/add/' + contestId + "/" + winnerId, body, {headers: headers})
  //     .map(res => {
  //       return res.json();
  //     })
  //     .catch(error => Observable.throw(error.json()));
  // }

}