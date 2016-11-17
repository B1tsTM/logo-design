import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'profile-page',
  templateUrl: 'profile-page.component.html'
})
export class ProfilePageComponent implements OnInit {
  avatarUrl: string = '';
  filesToUpload: File[];
  percent = "0";
  id = '';
  isLoading = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private authService: AuthService, private notificationsService: NotificationsService) {
    this.filesToUpload = [];
   }

  ngOnInit() { 
      this.isLoading = true;
    this.id = localStorage.getItem('userId');
    this.authService.getAvatar(this.id)
      .subscribe(data => {
        console.log(data);
        this.avatarUrl = data.avatarUrl;
        this.isLoading = false;
      }, error => {
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
  }

  upload() {
      this.isLoading = true;
        this.makeFileRequest("http://localhost:3000/api/v1/avatars/"+this.id, this.filesToUpload).then((result) => {
            console.log(result);
            this.authService.getAvatar(this.id)
              .subscribe(data => {
              console.log(data);
              this.avatarUrl = data.avatarUrl;
              this.isLoading = false;
            }, error => {
                this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            });
            this.filesToUpload = [];
        }, (error) => {
            console.error(error);
        });
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        //this.filesToUpload.forEach((file, i) => this.filesToUpload.push(fileInput.target.files[i]));
        console.log(fileInput.target.files);
        //let arr = Array.from(fileInput.target.files); //convert File Object to Array to push it
        //this.filesToUpload.push(arr[0]); //use this if you use multiple single file inputs
        console.log(this.filesToUpload);
    }
 
    makeFileRequest(url: string, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("avatar", files[i], files[i].name);
            }
            xhr.upload.addEventListener("progress", (evt) => this.calculateUploadProgress(evt), false); 
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.onerror = function(e) {
                console.log('Klaida įkeliant failus');
                console.log(e);
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

    calculateUploadProgress(evt) {
    if (evt.lengthComputable) {
        this.percent = Math.round(evt.loaded / evt.total * 100) + "%";
        console.log("PERCENT : ", this.percent);
    }
}

}