import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  templateUrl: 'booklet.component.html'
})
export class BookletComponent implements OnInit {
  tmpUrl;
  constructor(private http:Http, private sanitizer: DomSanitizer){
    
  }
  ngOnInit(){
    let url = this.sanitizer.bypassSecurityTrustUrl("https://upload.wikimedia.org/wikipedia/commons/5/5f/Cors_Caron3.jpg");
    let url2 = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Cors_Caron3.jpg";
    
    this.getImage(url).subscribe(imageData =>{
      this.tmpUrl = URL.createObjectURL(new Blob([imageData]));
    });
    
    
    // the below will throw not implemented error
    this.http.get(url2).subscribe(image=>{
      console.log(image.arrayBuffer());
    })
  }
  
  getImage(url:any){ 
    return Observable.create(observer=>{
      let req = new XMLHttpRequest();
      req.open('get',url);
      req.responseType = "arraybuffer";
      req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
          observer.next(req.response);
          observer.complete();
        }
      };
      req.send();
    });
  }
}