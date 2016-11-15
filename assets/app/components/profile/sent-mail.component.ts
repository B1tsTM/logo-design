import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'sent-mail',
  templateUrl: 'sent-mail.component.html',
  styleUrls: ['sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  messages = [];
  userId: string;
  loading: boolean = false;
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { 
    this.loading = true;
    this.userId = localStorage.getItem('userId');
    this.apiService.getMessages(this.userId)
      .subscribe(messages => {
        let filteredMessages = [];
        for (let i=0; i<messages.length; i++) {
          if(messages[i].status == 'Išsiųsta') {
            filteredMessages.push(messages[i]);
          }
        }
        this.messages = filteredMessages;
        console.log('THIS.MESSAGES');
        console.log(this.messages);
      });
  }

  viewMessage(messageId: number) {
    this.router.navigate(['../zinutes', messageId], {relativeTo: this.route})
  }

  goBack() {
    this.router.navigate(['/profilis', 'pastas']);
  }
}