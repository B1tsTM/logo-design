import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'mail-create-for-user',
  templateUrl: 'mail-create-for-user.component.html',
  styleUrls: ['mail-create-for-user.component.css']
})
export class MailCreateForUserComponent implements OnInit {
  nickname: string;
  message: string;
  //searchedUsers = [];
  results:any;
  userId: string;
  sender: any;
  topic: string;
  loading: boolean = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private route: ActivatedRoute, 
              private apiService: ApiService,
              private notificationsService: NotificationsService,
              private router: Router) { }

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
      }, error => {
        this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti siuntėjo informacijos', {timeOut: 3000, showProgressBar: false})
      });
  }

  sendMessage() {
    this.loading = true;
    this.apiService.sendMessage(this.nickname, this.topic, this.message)
      .subscribe(res => {
        console.log(res);
        this.notificationsService.success('Išsiųsta', 'Žinutė išsiųsta sėkmingai', {timeOut: 3000, showProgressBar: false})
        this.loading = false;
        this.router.navigate(['/profilis', 'pastas']);
      }, error => {
        this.notificationsService.error('Įvyko klaida', 'Nepavyko išsiųsti žinutės', {timeOut: 3000, showProgressBar: false})
      });
  }

  // searchUsers() {
  //   this.apiService.searchUsers(this.nickname)
  //     .subscribe(res => {
  //       this.searchedUsers = res;
  //       console.log('SEARCH RESULTS');
  //       console.log(res);
  //       console.log('THIS.searchedUsers');
  //       console.log(this.searchedUsers);
  //     }, error => {
  //       this.notificationsService.error('Įvyko klaida', 'Nepavyko rasti vartotojo', {timeOut: 3000, showProgressBar: false})
  //     });
  // }

  search(event) {
    this.apiService.searchUsers(event.query)
      .subscribe(res => {
        this.results = res;
      }, error => {
        this.notificationsService.error('Įvyko klaida', 'Nepavyko rasti vartotojo', {timeOut: 3000, showProgressBar: false})
      });
  }
  onSelect(obj) {
    console.log(event);
    this.nickname = obj.nickName;
  }

  goBack() {
    this.router.navigate(['/profilis', 'pastas']);
  }
  
}