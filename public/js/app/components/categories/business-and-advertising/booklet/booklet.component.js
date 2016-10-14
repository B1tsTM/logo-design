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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var BookletComponent = (function () {
    function BookletComponent(_http) {
        this._http = _http;
    }
    BookletComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Cors_Caron3.jpg";
        this.getImage(url).subscribe(function (imageData) {
            _this.tmpUrl = URL.createObjectURL(new Blob([imageData]));
        });
        // the below will throw not implemented error
        this._http.get(url).subscribe(function (image) {
            console.log(image.arrayBuffer());
        });
    };
    BookletComponent.prototype.getImage = function (url) {
        return Observable_1.Observable.create(function (observer) {
            var req = new XMLHttpRequest();
            req.open('get', url);
            req.responseType = "arraybuffer";
            req.onreadystatechange = function () {
                if (req.readyState == 4 && req.status == 200) {
                    observer.next(req.response);
                    observer.complete();
                }
            };
            req.send();
        });
    };
    BookletComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'booklet.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookletComponent);
    return BookletComponent;
}());
exports.BookletComponent = BookletComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9idXNpbmVzcy1hbmQtYWR2ZXJ0aXNpbmcvYm9va2xldC9ib29rbGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHFCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUNyQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQU03QztJQUVFLDBCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUU5QixDQUFDO0lBQ0QsbUNBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxHQUFHLEdBQUcscUVBQXFFLENBQUM7UUFFaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxTQUFTO1lBQ3BDLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUdILDZDQUE2QztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLEdBQVU7UUFDakIsTUFBTSxDQUFDLHVCQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUTtZQUMvQixJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDdkIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQyxDQUFDO1lBQ0YsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7O3dCQUFBO0lBa0NGLHVCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSx3QkFBZ0IsbUJBaUM1QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2F0ZWdvcmllcy9idXNpbmVzcy1hbmQtYWR2ZXJ0aXNpbmcvYm9va2xldC9ib29rbGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnYm9va2xldC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2tsZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHRtcFVybDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApe1xyXG4gICAgXHJcbiAgfVxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBsZXQgdXJsID0gXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzUvNWYvQ29yc19DYXJvbjMuanBnXCI7XHJcbiAgICBcclxuICAgIHRoaXMuZ2V0SW1hZ2UodXJsKS5zdWJzY3JpYmUoaW1hZ2VEYXRhID0+e1xyXG4gICAgICB0aGlzLnRtcFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2ltYWdlRGF0YV0pKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIHRoZSBiZWxvdyB3aWxsIHRocm93IG5vdCBpbXBsZW1lbnRlZCBlcnJvclxyXG4gICAgdGhpcy5faHR0cC5nZXQodXJsKS5zdWJzY3JpYmUoaW1hZ2U9PntcclxuICAgICAgY29uc29sZS5sb2coaW1hZ2UuYXJyYXlCdWZmZXIoKSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICBnZXRJbWFnZSh1cmw6c3RyaW5nKXsgXHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXI9PntcclxuICAgICAgbGV0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICByZXEub3BlbignZ2V0Jyx1cmwpO1xyXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG4gICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09IDQgJiYgcmVxLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVxLnJlc3BvbnNlKTtcclxuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICByZXEuc2VuZCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
