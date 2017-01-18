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

  getContestAdditionalFiles(id: string) {
    return this.http.get('http://localhost:3000/api/v1/contest/' + id)
    .map(res => {
      const data = res.json().obj.additionalFiles;
      return data;
    })
  }

  getContestSubmitions(id: string) {
    return this.http.get('http://localhost:3000/api/v1/submitions/contest/'+id)
      .map(res => {
        const data = res.json().submitions;
          let submitions: any[] = [];
          for(let i=0; i< data.length; i++) {
            let submition = {submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating, submitionId: data[i].submitionId, status: data[i].status, comments: data[i].comments};
            submitions.push(submition);
          };
          return submitions;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getMySubmitions(contestId: string) {
    return this.http.get('http://localhost:3000/api/v1/submitions/contest/'+contestId)
      .map(res => {
        const data = res.json().submitions;
          let userId = sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : '';
          let mySubmitions: any[] = [];
          for(let i=0; i< data.length; i++) {
            if (data[i].submitionAuthor._id == userId) {
            let mySubmition = {submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating, submitionId: data[i].submitionId, status: data[i].status, comments: data[i].comments};
            mySubmitions.push(mySubmition);
            }
          };
          return mySubmitions;

      })
      .catch(error => Observable.throw(error.json()));
  }

  getWinnerSubmition(contestId) {
    return this.http.get('http://localhost:3000/api/v1/contest/' + contestId + '/winner')
      .map(res => {
        return res.json().obj;
      })
      .catch(error => Observable.throw(error.json())); 
  }

  getUserInfo(userId: string) {
    if(!userId) {
      return Observable.empty();
    }
    return this.http.get('http://localhost:3000/api/v1/users/'+userId)
    .map(res => {
      const user = res.json().user;
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
      return contest;
    })
    .catch(error => Observable.throw(error.json()));
  }

  getComments(contestId: string) {
    return this.http.get('http://localhost:3000/api/v1/contest/' + contestId + '/comments')
    .map(res => {
      const comments = res.json().obj.comments;
      return comments;
    })
    .catch(error => Observable.throw(error.json()));
  }

  getSubmitionComments(contestId: string, submitionId: number) {
    return this.http.get('http://localhost:3000/api/v1/contest/' + contestId + '/submition/'+ submitionId + '/comments')
    .map(res => {
      const comments = res.json().obj;
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
    var userId = sessionStorage.getItem('userId');
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


  getAllUsers() {
    return this.http.get('http://localhost:3000/api/v1/users/all')
      .map(res => {
        const data = res.json().obj;
        return data;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getFilteredUsers(searchString: string) {
    if(searchString.match(/^\s+$/) || !searchString) { // If all whitespace or empty string
      return this.http.get('http://localhost:3000/api/v1/users/all')
      .map(res => {
        const data = res.json().obj;

        return data;
      })
      .catch(error => Observable.throw(error.json()));
    } else {
    return this.http.get('http://localhost:3000/api/v1/users/filter/' + searchString)
      .map(res => {

        return res.json().obj;
      })
      .catch(error => Observable.throw(error.json()));
      }
  }

  getIndividualUser(nickname: any) {
    return this.http.get('http://localhost:3000/api/v1/users/single/' + nickname)
      .map(res => {
        const data = res.json().obj;
        return data;
      })
      .catch(error => Observable.throw(error.json()));
  }

  updateUserStatus(nickname, status) {
    const body = JSON.stringify({nickname: nickname, status: status});
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : '';

    return this.http.patch("http://localhost:3000/api/v1/users/update/status/" + nickname + token, body, {headers: headers})
    .map(res => res.json())
    .catch(error => Observable.throw(error.json()));
  }

}