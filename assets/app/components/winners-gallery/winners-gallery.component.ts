import { Component, OnInit } from '@angular/core';
import { ContestsService } from '../../services/contests.service';

@Component({
  moduleId: module.id,
  selector: 'winners-gallery',
  templateUrl: 'winners-gallery.component.html',
  styleUrls: ['winners-gallery.component.css']
})
export class WinnersGalleryComponent implements OnInit {
  cssClass: string = '';
  animation: boolean = true;
  keyboard: boolean = true;
  backdrop: string | boolean = true;
  winners = [];
  constructor(private contestsService: ContestsService) { }

  ngOnInit() { 
    this.contestsService.getWinnersGallery()
    .subscribe(data => {
      this.winners = data;
    }, error => {
      console.log('Klaida gaunant laimėtojus');
    })
  }
}