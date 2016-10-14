"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AbDesignComponent = (function () {
    function AbDesignComponent() {
        this.percent = "0";
        this.id = '';
        this.filesToUpload = [];
    }
    AbDesignComponent.prototype.ngOnInit = function () { };
    AbDesignComponent.prototype.upload = function () {
        var _this = this;
        this.id = localStorage.getItem('userId');
        this.makeFileRequest("http://localhost:3000/api/v1/avatars/" + this.id, [], this.filesToUpload).then(function (result) {
            console.log(result);
            _this.filesToUpload = [];
        }, function (error) {
            console.error(error);
        });
    };
    AbDesignComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        //this.filesToUpload.forEach((file, i) => this.filesToUpload.push(fileInput.target.files[i]));
        console.log(fileInput.target.files);
        //let arr = Array.from(fileInput.target.files); //convert File Object to Array to push it
        //this.filesToUpload.push(arr[0]); //use this if you use multiple single file inputs
        console.log(this.filesToUpload);
    };
    AbDesignComponent.prototype.makeFileRequest = function (url, params, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("avatar", files[i], files[i].name);
            }
            xhr.upload.addEventListener("progress", function (evt) { return _this.calculateUploadProgress(evt); }, false);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.onerror = function (e) {
                console.log('Klaida įkeliant failus');
                console.log(e);
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    AbDesignComponent.prototype.calculateUploadProgress = function (evt) {
        if (evt.lengthComputable) {
            this.percent = Math.round(evt.loaded / evt.total * 100) + "%";
            console.log("PERCENT : ", this.percent);
        }
    };
    AbDesignComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'ab-design.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AbDesignComponent);
    return AbDesignComponent;
}());
exports.AbDesignComponent = AbDesignComponent; //EOF

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9idXNpbmVzcy1hbmQtYWR2ZXJ0aXNpbmcvYWItZGVzaWduL2FiLWRlc2lnbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQU1sRDtJQUlFO1FBRkEsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQUNkLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFFTixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUYsb0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxrQ0FBTSxHQUFOO1FBQUEsaUJBUUc7UUFQRyxJQUFJLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1Q0FBdUMsR0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUN0RyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJDQUFlLEdBQWYsVUFBZ0IsU0FBYztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFpQixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxRCw4RkFBOEY7UUFDOUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLHlGQUF5RjtRQUN6RixvRkFBb0Y7UUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDJDQUFlLEdBQWYsVUFBZ0IsR0FBVyxFQUFFLE1BQXFCLEVBQUUsS0FBa0I7UUFBdEUsaUJBd0JDO1FBdkJHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQUksUUFBUSxHQUFRLElBQUksUUFBUSxFQUFFLENBQUM7WUFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUMvQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLEVBQWpDLENBQWlDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0YsR0FBRyxDQUFDLGtCQUFrQixHQUFHO2dCQUNyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDekIsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQyxDQUFBO1lBQ0QsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFTLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtREFBdUIsR0FBdkIsVUFBd0IsR0FBRztRQUMzQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0wsQ0FBQztJQWhFRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDOzt5QkFBQTtJQStERix3QkFBQztBQUFELENBOURBLEFBOERDLElBQUE7QUE5RFkseUJBQWlCLG9CQThEN0IsQ0FBQSxDQUFDLEtBQUsiLCJmaWxlIjoiY29tcG9uZW50cy9jYXRlZ29yaWVzL2J1c2luZXNzLWFuZC1hZHZlcnRpc2luZy9hYi1kZXNpZ24vYWItZGVzaWduLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWItZGVzaWduLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJEZXNpZ25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZpbGVzVG9VcGxvYWQ6IEZpbGVbXTtcclxuICBwZXJjZW50ID0gXCIwXCI7XHJcbiAgaWQgPSAnJztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IFtdO1xyXG4gICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIHVwbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgICAgIHRoaXMubWFrZUZpbGVSZXF1ZXN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9hdmF0YXJzL1wiK3RoaXMuaWQsIFtdLCB0aGlzLmZpbGVzVG9VcGxvYWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsZUNoYW5nZUV2ZW50KGZpbGVJbnB1dDogYW55KXtcclxuICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSA8QXJyYXk8RmlsZT4+IGZpbGVJbnB1dC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgLy90aGlzLmZpbGVzVG9VcGxvYWQuZm9yRWFjaCgoZmlsZSwgaSkgPT4gdGhpcy5maWxlc1RvVXBsb2FkLnB1c2goZmlsZUlucHV0LnRhcmdldC5maWxlc1tpXSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVJbnB1dC50YXJnZXQuZmlsZXMpO1xyXG4gICAgICAgIC8vbGV0IGFyciA9IEFycmF5LmZyb20oZmlsZUlucHV0LnRhcmdldC5maWxlcyk7IC8vY29udmVydCBGaWxlIE9iamVjdCB0byBBcnJheSB0byBwdXNoIGl0XHJcbiAgICAgICAgLy90aGlzLmZpbGVzVG9VcGxvYWQucHVzaChhcnJbMF0pOyAvL3VzZSB0aGlzIGlmIHlvdSB1c2UgbXVsdGlwbGUgc2luZ2xlIGZpbGUgaW5wdXRzXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlc1RvVXBsb2FkKTtcclxuICAgIH1cclxuIFxyXG4gICAgbWFrZUZpbGVSZXF1ZXN0KHVybDogc3RyaW5nLCBwYXJhbXM6IEFycmF5PHN0cmluZz4sIGZpbGVzOiBBcnJheTxGaWxlPikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YTogYW55ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdmF0YXJcIiwgZmlsZXNbaV0sIGZpbGVzW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIChldnQpID0+IHRoaXMuY2FsY3VsYXRlVXBsb2FkUHJvZ3Jlc3MoZXZ0KSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnS2xhaWRhIMSva2VsaWFudCBmYWlsdXMnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVVwbG9hZFByb2dyZXNzKGV2dCkge1xyXG4gICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gTWF0aC5yb3VuZChldnQubG9hZGVkIC8gZXZ0LnRvdGFsICogMTAwKSArIFwiJVwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUEVSQ0VOVCA6IFwiLCB0aGlzLnBlcmNlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG59IC8vRU9GIl19
