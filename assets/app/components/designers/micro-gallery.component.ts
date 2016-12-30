import { Component, OnInit, Input } from '@angular/core';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'micro-gallery',
  templateUrl: 'micro-gallery.component.html',
  styleUrls: ['micro-gallery.component.css']
})
export class MicroGalleryComponent implements OnInit {
  @Input() designer;
  cssClass: string = '';
  animation: boolean = true;
  keyboard: boolean = true;
  backdrop: string | boolean = true;
  
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
        jQuery(document).ready(function() {
          jQuery(".fancybox").fancybox({
          
          });
      });
    }

}