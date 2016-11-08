import { Component, OnInit, Input, Output, EventEmitter, Renderer, ElementRef, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'star-rating',
  templateUrl: 'star-rating.component.html',
  styleUrls: ['star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @ViewChild('stars') stars;
  range: Array<number> = [1, 2, 3, 4, 5];
  @Input() rating: number;
  @Input() submitionId: number;
  @Input() contestId: string;
  @Input() readonly: boolean;
  @Output() ratingClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor(private renderer: Renderer, private el: ElementRef) { }

  ngOnInit() { }

  changeCursor() {
    if (!this.readonly) {
      this.renderer.setElementStyle(this.el.nativeElement, "cursor", "pointer");
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, "cursor", "default");
    }
  }
  removeCursor() {
    if (!this.readonly) {
      this.renderer.setElementStyle(this.el.nativeElement, "cursor", "default");
    }
  }

  changeRating(rating: number) {
    if (!this.readonly) {
    this.rating = rating;
    this.ratingClicked.emit({
      rating: this.rating,
      submitionId: this.submitionId,
      contestId: this.contestId
    });
    }
  }

}