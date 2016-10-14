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
var platform_browser_1 = require('@angular/platform-browser');
var BookletComponent = (function () {
    function BookletComponent(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    BookletComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.sanitizer.bypassSecurityTrustUrl("https://upload.wikimedia.org/wikipedia/commons/5/5f/Cors_Caron3.jpg");
        var url2 = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Cors_Caron3.jpg";
        this.getImage(url).subscribe(function (imageData) {
            _this.tmpUrl = URL.createObjectURL(new Blob([imageData]));
        });
        // the below will throw not implemented error
        this.http.get(url2).subscribe(function (image) {
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
        __metadata('design:paramtypes', [http_1.Http, platform_browser_1.DomSanitizer])
    ], BookletComponent);
    return BookletComponent;
}());
exports.BookletComponent = BookletComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9idXNpbmVzcy1hbmQtYWR2ZXJ0aXNpbmcvYm9va2xldC9ib29rbGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHFCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUNyQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxpQ0FBNkIsMkJBQTJCLENBQUMsQ0FBQTtBQU16RDtJQUVFLDBCQUFvQixJQUFTLEVBQVUsU0FBdUI7UUFBMUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFFOUQsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMscUVBQXFFLENBQUMsQ0FBQztRQUN2SCxJQUFJLElBQUksR0FBRyxxRUFBcUUsQ0FBQztRQUVqRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDcEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBR0gsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsR0FBTztRQUNkLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7WUFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQztZQUNwQixHQUFHLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztZQUNqQyxHQUFHLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzVCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztZQUNILENBQUMsQ0FBQztZQUNGLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXJDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN0QyxDQUFDOzt3QkFBQTtJQW1DRix1QkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksd0JBQWdCLG1CQWtDNUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NhdGVnb3JpZXMvYnVzaW5lc3MtYW5kLWFkdmVydGlzaW5nL2Jvb2tsZXQvYm9va2xldC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICdib29rbGV0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9va2xldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdG1wVXJsO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKXtcclxuICAgIFxyXG4gIH1cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgbGV0IHVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwoXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzUvNWYvQ29yc19DYXJvbjMuanBnXCIpO1xyXG4gICAgbGV0IHVybDIgPSBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNS81Zi9Db3JzX0Nhcm9uMy5qcGdcIjtcclxuICAgIFxyXG4gICAgdGhpcy5nZXRJbWFnZSh1cmwpLnN1YnNjcmliZShpbWFnZURhdGEgPT57XHJcbiAgICAgIHRoaXMudG1wVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbaW1hZ2VEYXRhXSkpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gdGhlIGJlbG93IHdpbGwgdGhyb3cgbm90IGltcGxlbWVudGVkIGVycm9yXHJcbiAgICB0aGlzLmh0dHAuZ2V0KHVybDIpLnN1YnNjcmliZShpbWFnZT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhpbWFnZS5hcnJheUJ1ZmZlcigpKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIGdldEltYWdlKHVybDphbnkpeyBcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlcj0+e1xyXG4gICAgICBsZXQgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHJlcS5vcGVuKCdnZXQnLHVybCk7XHJcbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT0gNCAmJiByZXEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXEucmVzcG9uc2UpO1xyXG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHJlcS5zZW5kKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
