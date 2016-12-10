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
var router_1 = require('@angular/router');
var auth_service_1 = require('../../services/auth.service');
var ConfirmUserComponent = (function () {
    function ConfirmUserComponent(route, authService, router) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.confirmedBlock = false;
        this.errorBlock = false;
    }
    ConfirmUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.confirmationCode = params['id'];
        });
        this.authService.validateUsersEmail(this.confirmationCode)
            .subscribe(function (data) {
            if (data.message) {
                console.log(data);
                _this.confirmedBlock = true;
            }
        }, function (error) {
            _this.errorBlock = true;
            setTimeout(function () {
                _this.router.navigate(['/']);
            }, 3000);
        });
    };
    ConfirmUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'confirm-user',
            templateUrl: 'confirm-user.component.html',
            styleUrls: ['confirm-user.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, auth_service_1.AuthService, router_1.Router])
    ], ConfirmUserComponent);
    return ConfirmUserComponent;
}());
exports.ConfirmUserComponent = ConfirmUserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXIvY29uZmlybS11c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBUTFEO0lBSUUsOEJBQW9CLEtBQXFCLEVBQ3JCLFdBQXdCLEVBQ3hCLE1BQWM7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGxDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFJbUIsQ0FBQztJQUV2Qyx1Q0FBUSxHQUFSO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWM7WUFDekMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2FBQ3pELFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFJN0IsQ0FBQztRQUNILENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixVQUFVLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWpDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOzs0QkFBQTtJQStCRiwyQkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5QlksNEJBQW9CLHVCQThCaEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3JlZ2lzdGVyL2NvbmZpcm0tdXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnY29uZmlybS11c2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NvbmZpcm0tdXNlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NvbmZpcm0tdXNlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1Vc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25maXJtZWRCbG9jayA9IGZhbHNlO1xyXG4gIGVycm9yQmxvY2sgPSBmYWxzZTtcclxuICBjb25maXJtYXRpb25Db2RlOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgICAgdGhpcy5jb25maXJtYXRpb25Db2RlID0gcGFyYW1zWydpZCddO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnZhbGlkYXRlVXNlcnNFbWFpbCh0aGlzLmNvbmZpcm1hdGlvbkNvZGUpXHJcbiAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5jb25maXJtZWRCbG9jayA9IHRydWU7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgLy8gfSwgMzAwMClcclxuICAgICAgfVxyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLmVycm9yQmxvY2sgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgICAgICB9LCAzMDAwKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgXHJcbn0iXX0=
