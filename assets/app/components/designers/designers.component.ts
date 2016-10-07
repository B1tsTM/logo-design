import { Component, OnInit } from '@angular/core';
import { DesignersService } from '../../services/designers.service';

@Component({
  moduleId: module.id,
  selector: 'designers',
  templateUrl: 'designers.component.html',
  styleUrls: ['designers.component.css']
})
export class DesignersComponent implements OnInit {
  designers: any;
  constructor(private designersService: DesignersService) { }

  ngOnInit() { 
    this.designersService.getDesigners()
    .subscribe(designers => {
      this.designers = designers;
      this.designersService.designers = designers;
      console.log(this.designers);
    });

  }
}