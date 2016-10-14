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
var FileUploadComponent = (function () {
    function FileUploadComponent(http, el) {
        this.http = http;
        this.el = el;
    }
    FileUploadComponent.prototype.upload = function () {
        var inputEl = this.el.nativeElement.firstElementChild;
        if (inputEl.files.length > 0) {
            var file = inputEl.files[0];
            this.http
                .post('http://localhost:3000/v1/api/avatar', file)
                .subscribe(function (file) { return console.log(file); });
        }
    };
    FileUploadComponent = __decorate([
        core_1.Component({
            selector: 'file-upload',
            template: '<input type="file">'
        }), 
        __metadata('design:paramtypes', [http_1.Http, core_1.ElementRef])
    ], FileUploadComponent);
    return FileUploadComponent;
}());
exports.FileUploadComponent = FileUploadComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9idXNpbmVzcy1hbmQtYWR2ZXJ0aXNpbmcvYmlsbGJvYXJkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBQ3RELHFCQUFxQixlQUFlLENBQUMsQ0FBQTtBQU1yQztJQUNJLDZCQUFvQixJQUFVLEVBQVUsRUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7SUFFMUQsb0NBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxJQUFJLEdBQVksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSTtpQkFDSixJQUFJLENBQUMscUNBQXFDLEVBQUUsSUFBSSxDQUFDO2lCQUNqRCxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUE7UUFHN0MsQ0FBQztJQUNMLENBQUM7SUFqQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHFCQUFxQjtTQUNsQyxDQUFDOzsyQkFBQTtJQWVGLDBCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSwyQkFBbUIsc0JBYy9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jYXRlZ29yaWVzL2J1c2luZXNzLWFuZC1hZHZlcnRpc2luZy9iaWxsYm9hcmQvZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWxlLXVwbG9hZCcsXHJcbiAgICB0ZW1wbGF0ZTogJzxpbnB1dCB0eXBlPVwiZmlsZVwiPidcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICAgIHVwbG9hZCgpIHtcclxuICAgICAgICBsZXQgaW5wdXRFbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICBpZiAoaW5wdXRFbC5maWxlcy5sZW5ndGggPiAwKSB7IC8vIGEgZmlsZSB3YXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgbGV0IGZpbGU6RmlsZUxpc3QgPSBpbnB1dEVsLmZpbGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICAgICAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdjEvYXBpL2F2YXRhcicsIGZpbGUpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZpbGUgPT4gY29uc29sZS5sb2coZmlsZSkpXHJcbiAgICAgICAgICAgICAgICAvLyBkbyB3aGF0ZXZlciB5b3UgZG8uLi5cclxuICAgICAgICAgICAgICAgIC8vIHN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGxpc3RlbiBmb3IgcmVzcG9uc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
