import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'read-message',
  templateUrl: 'read-message.component.html',
  styleUrls: ['read-message.component.css']
})
export class ReadMessageComponent implements OnInit {
  messageId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.params.subscribe((params: Params) => {
    this.messageId = params['messageId']
  })
  }
}