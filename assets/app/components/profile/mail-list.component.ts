import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'mail-list',
  templateUrl: 'mail-list.component.html',
  styleUrls: ['mail-list.component.css']
})
export class MailListComponent implements OnInit {
  messages = [];
  userId: string;
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { 
    this.userId = localStorage.getItem('userId');
    this.apiService.getMessages(this.userId)
      .subscribe(messages => {
        
        let filteredMessages = [];
        for (let i=0; i<messages.length; i++) {
          if(messages[i].status == 'Neperžiūrėta' || messages[i].status == 'Peržiūrėta') {
            filteredMessages.push(messages[i]);
          }
        }
        this.messages = filteredMessages;
        console.log('THIS.MESSAGES');
        console.log(this.messages);
      });
  }

  viewMessage(messageId: number) {
    this.apiService.changeMessageStatus(this.userId, messageId)
      .subscribe(res => {
        console.log(res);
      }, error => {
        console.error(error);
      });
    this.router.navigate(['zinutes', messageId], {relativeTo: this.route})
  }
}