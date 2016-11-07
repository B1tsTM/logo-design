import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'star-rating',
  templateUrl: 'star-rating.component.html',
  styleUrls: ['star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  range: Array<number> = [1, 2, 3, 4, 5];
  @Input() rating: number;
  @Input() submitionId: number;
  @Input() contestId: string;
  @Output() ratingClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }

  changeRating(rating: number) {
    this.rating = rating;
    this.ratingClicked.emit({
      rating: this.rating,
      submitionId: this.submitionId,
      contestId: this.contestId
    });
  }
}