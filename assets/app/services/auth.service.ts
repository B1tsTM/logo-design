import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/registracija', body, {headers:headers})
      .map(res => {
        const data = res.json().obj;
        let user = new User(data.nickName, data.password, data.userType ,data.firstName, data.lastName, data.email, 0, 0);
        console.log(user);
        return user;
      })
      .catch(error => Observable.throw(error.json()));
  }

  signin(user: User) {
    console.log('auth service incoming user');
    console.log(user);
    const body = JSON.stringify(user);
    console.log('auth service stringified user')
    console.log(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/prisijungti', body, {headers:headers})
      .map(res => {
        var token = res.json().token;
        var userId = res.json().userId;
        var userType = res.json().userType;
        var nickname = res.json().nickname;
        return {token: token, userId: userId, userType: userType, nickname: nickname};
        
      })
      .catch(error => Observable.throw(error.json()));
  }

  isLoggedIn() {
    return sessionStorage.getItem('token') !== null;
  }

  isClient() {
    return sessionStorage.getItem('userType') == 'uzsakovas';
  }

  isDesigner() {
    return sessionStorage.getItem('userType') == 'dizaineris';
  }

  getAvatar(id: string) {
    return this.http.get('http://localhost:3000/api/v1/avatars/'+id)
      .map(res => {
        var avatarUrl = res.json().avatarUrl;
        return {avatarUrl: avatarUrl}
      })
      .catch(error => Observable.throw(error.json()));
  }

  getGallery(id: string) {
    return this.http.get('http://localhost:3000/api/v1/gallery/'+id)
      .map(res => {
        var galleryUrls = res.json().galleryUrls;
        return {galleryUrls: galleryUrls}
      })
      .catch(error => Observable.throw(error.json()));
  }

}