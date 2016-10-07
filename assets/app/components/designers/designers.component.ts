import { Component, OnInit } from '@angular/core';
import { ContestsService } from '../../services/contests.service';

@Component({
  moduleId: module.id,
  selector: 'designers',
  templateUrl: 'designers.component.html',
  styleUrls: ['designers.component.css']
})
export class DesignersComponent implements OnInit {
  designers: any;
  constructor(private contestsService: ContestsService) { }

  ngOnInit() { 
    this.contestsService.getDesigners()
    .subscribe(designers => {
      this.designers = designers;
      this.contestsService.designers = designers;
      console.log(this.designers);
    });

  }
}