import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'ab-design.component.html'
})
export class AbDesignComponent implements OnInit {
  filesToUpload: any;
  constructor() {
    this.filesToUpload = [];
   }

  ngOnInit() { }

  upload() {
        this.makeFileRequest("http://localhost:3000/api/v1/avatar", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }
 
    fileChangeEvent(fileInput: any){
        //this.filesToUpload = <Array<File>> fileInput.target.files;
        //this.filesToUpload.forEach((file, i) => this.filesToUpload.push(fileInput.target.files[i]));
        console.log(fileInput.target.files);
        let arr = Array.from(fileInput.target.files); //convert File Object to Array to push it
        this.filesToUpload.push(arr[0]);
        console.log(this.filesToUpload);
    }
 
    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
}