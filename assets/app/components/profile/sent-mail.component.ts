import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';


@Component({
  moduleId: module.id,
  selector: 'sent-mail',
  templateUrl: 'sent-mail.component.html',
  styleUrls: ['sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  messages = [];
  receivedMessages = [];
  userId: string;
  isLoading: boolean = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private apiService: ApiService, 
              private router: Router, 
              private route: ActivatedRoute,
              private notificationsService: NotificationsService) { }

  ngOnInit() { 
    this.isLoading = true;
    this.userId = sessionStorage.getItem('userId');
    this.apiService.getMessages(this.userId)
      .subscribe(messages => {
        let filteredMessages = [];
        let filteredReceivedMessages = [];
        for (let i=0; i<messages.length; i++) {
          if(messages[i].status == 'Išsiųsta') {
            filteredMessages.push(messages[i]);
          }
          if(messages[i].status == 'Neperžiūrėta' || messages[i].status == 'Peržiūrėta') {
            filteredReceivedMessages.push(messages[i]);
          }
        }
        this.messages = filteredMessages;
        this.receivedMessages = filteredReceivedMessages;
        this.isLoading = false;
        console.log('THIS.MESSAGES');
        console.log(this.messages);
      }, error => {
        this.isLoading = false;
        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }

  viewMessage(messageId: number) {
    this.router.navigate(['../zinutes', messageId], {relativeTo: this.route})
  }

  goBack() {
    this.router.navigate(['/profilis', 'pastas']);
  }

  goToNewMessage() {
    this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska']);
  }

}