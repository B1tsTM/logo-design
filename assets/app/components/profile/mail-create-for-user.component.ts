import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  moduleId: module.id,
  selector: 'mail-create-for-user',
  templateUrl: 'mail-create-for-user.component.html',
  styleUrls: ['mail-create-for-user.component.css']
})
export class MailCreateForUserComponent implements OnInit {
  nickname: string;
  message: string;
  searchedUsers = [];
  results:any;
  userId: string;
  sender: any;
  topic: string;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() { 
    this.userId = localStorage.getItem('userId');
    this.route.params.subscribe((params: Params) => {
    this.nickname = params['nickname'];
    });
    this.apiService.getUserInfo(this.userId)
      .subscribe(res => {
        this.sender = res;
        console.log('THIS.SENDER');
        console.log(this.sender);
      });
  }

  sendMessage() {
    this.apiService.sendMessage(this.nickname, this.topic, this.message)
      .subscribe(res => {
        console.log(res);
      });
  }

  searchUsers() {
    this.apiService.searchUsers(this.nickname)
      .subscribe(res => {
        this.searchedUsers = res;
        console.log('SEARCH RESULTS');
        console.log(res);
        console.log('THIS.searchedUsers');
        console.log(this.searchedUsers);
      });
  }

  search(event) {
    this.apiService.searchUsers(event.query)
      .subscribe(res => {
        this.results = res;
      });
  }
  onSelect(obj) {
    console.log(event);
    this.nickname = obj.nickName;
  }
}