import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'read-message',
  templateUrl: 'read-message.component.html',
  styleUrls: ['read-message.component.css']
})
export class ReadMessageComponent implements OnInit {
  messageId: number;
  userId: string;
  message: any;
  public options = {
      position: ["top","right"]
    };
  constructor(private route: ActivatedRoute, 
              private apiService: ApiService, 
              private router: Router,
              private notificationsService: NotificationsService) { }

  ngOnInit() { 
    this.userId = localStorage.getItem('userId');
    this.route.params.subscribe((params: Params) => {
    this.messageId = params['messageId']
    })
    this.apiService.getMessages(this.userId)
      .subscribe(messages => {
        for(let i=0; i<messages.length; i++) {
          if(messages[i].messageId == this.messageId) {
            this.message = messages[i];
          }
        }
      }, error => {
        this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti žinučių', {timeOut: 3000, showProgressBar: false})
      });
  }

  reply() {
    this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska', this.message.sender.nickName]);
  }

  deleteMessage() {
    this.apiService.deleteMessage(this.messageId)
      .subscribe(res => {
        console.log(res);
        //this.message = null;
        this.notificationsService.info('Ištrinta', 'Žinutė ištrinta', {timeOut: 3000, showProgressBar: false})
        this.router.navigate(['/profilis', 'pastas']);
      }, error => {
        this.notificationsService.error('Įvyko klaida', 'Nepavyko ištrinti žinutės', {timeOut: 3000, showProgressBar: false})
      });
  }

}