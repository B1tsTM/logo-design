import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'mail-create',
  templateUrl: 'mail-create.component.html',
  styleUrls: ['mail-create.component.css']
})
export class MailCreateComponent implements OnInit {
  nickname: any;
  message: string;
  results:any;
  userId: string;
  sender: any;
  topic: string;
  isLoading: boolean = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private route: ActivatedRoute, 
              private apiService: ApiService,
              private notificationsService: NotificationsService,
              private router: Router) { }

  ngOnInit() { 
    this.userId = localStorage.getItem('userId');
    this.apiService.getUserInfo(this.userId)
      .subscribe(res => {
        this.sender = res;
        console.log('THIS.SENDER');
        console.log(this.sender);
      }, error => {
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }

  sendMessage() {
    this.isLoading = true;
    this.apiService.sendMessage(this.nickname.nickName, this.topic, this.message)
      .subscribe(res => {
        console.log(res);
        this.notificationsService.success('Išsiųsta', 'Žinutė išsiųsta sėkmingai', {timeOut: 3000, showProgressBar: false})
        this.router.navigate(['/profilis', 'pastas']);
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }

  search(event) {
    this.apiService.searchUsers(event.query)
      .subscribe(res => {
        this.results = res;
      }, error => {
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }
  onSelect(obj) {
    console.log(event);
    //this.nickname = obj.nickName;
  }

  goBack() {
    this.router.navigate(['/profilis', 'pastas']);
  }

}