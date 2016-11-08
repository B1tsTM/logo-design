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
var index_1 = require('../../errors/index');
var api_service_1 = require('../../services/api.service');
var router_1 = require('@angular/router');
var SubmitionDetailsComponent = (function () {
    function SubmitionDetailsComponent(apiService, errorService, route, router) {
        this.apiService = apiService;
        this.errorService = errorService;
        this.route = route;
        this.router = router;
        this.cssClass = '';
        this.submitions = [];
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
    }
    SubmitionDetailsComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe((params: Params) => {
        //   this.contestId = params['id'];
        //   console.log('ngOnInit params id (contestId)');
        //   console.log(this.contestId);
        // });
        // this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
        //     .subscribe(submitions => {
        //         console.log('submitions from apiservice in submition-details');
        //         console.log(submitions);
        //         this.submitions = submitions;
        //         console.log(this.submitions);
        //     },
        //     error => {
        //       this.errorService.handleError(error);
        //   });
        //   console.log('ngOnInit submition details this.submitionS');
        //   console.log(this.submitions);
        //   this.submition = this.submitions.filter((sub) => {
        //     console.log('sub.submitionUrl');
        //     console.log(sub.submitionUrl);
        //     console.log('this.submitionUrl');
        //     console.log(this.submitionUrl);
        //     return sub.submitionUrl == this.submitionUrl
        //   });
        //   console.log('ngOnInit submition details this.submition');
        //   console.log(this.submition);
    };
    SubmitionDetailsComponent.prototype.closed = function () {
        console.log('Modal closed');
    };
    SubmitionDetailsComponent.prototype.dismissed = function () {
        console.log('Modal dismissed');
    };
    SubmitionDetailsComponent.prototype.opened = function () {
        console.log('Modal opened');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SubmitionDetailsComponent.prototype, "contestId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SubmitionDetailsComponent.prototype, "submition", void 0);
    SubmitionDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'submition-details',
            templateUrl: 'submition-details.component.html',
            styleUrls: ['submition-details.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, index_1.ErrorService, router_1.ActivatedRoute, router_1.Router])
    ], SubmitionDetailsComponent);
    return SubmitionDetailsComponent;
}());
exports.SubmitionDetailsComponent = SubmitionDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFFekQsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFRakU7SUFTRSxtQ0FBb0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsS0FBcUIsRUFDckIsTUFBYztRQUhkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVRoQyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBcUIsSUFBSSxDQUFDO0lBS0csQ0FBQztJQUV4Qyw0Q0FBUSxHQUFSO1FBQ0Usb0RBQW9EO1FBQ3BELG1DQUFtQztRQUNuQyxtREFBbUQ7UUFDbkQsaUNBQWlDO1FBQ2pDLE1BQU07UUFDTix1RUFBdUU7UUFDdkUsaUNBQWlDO1FBQ2pDLDBFQUEwRTtRQUMxRSxtQ0FBbUM7UUFDbkMsd0NBQXdDO1FBQ3hDLHdDQUF3QztRQUN4QyxTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLDhDQUE4QztRQUM5QyxRQUFRO1FBQ1IsK0RBQStEO1FBQy9ELGtDQUFrQztRQUNsQyx1REFBdUQ7UUFDdkQsdUNBQXVDO1FBQ3ZDLHFDQUFxQztRQUNyQyx3Q0FBd0M7UUFDeEMsc0NBQXNDO1FBQ3RDLG1EQUFtRDtRQUNuRCxRQUFRO1FBQ1IsOERBQThEO1FBQzlELGlDQUFpQztJQUNuQyxDQUFDO0lBRUMsMENBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDZDQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDBDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFwREQ7UUFBQyxZQUFLLEVBQUU7O2dFQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2dFQUFBO0lBUlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQyxDQUFDOztpQ0FBQTtJQXdERixnQ0FBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFksaUNBQXlCLDRCQXVEckMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL3N1Ym1pdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3N1Ym1pdGlvbi1kZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJ3N1Ym1pdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJtaXRpb25EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGNvbnRlc3RJZDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc3VibWl0aW9uOiBhbnk7XHJcbiAgICBjc3NDbGFzczogc3RyaW5nID0gJyc7XHJcbiAgICBzdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gICAgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGJhY2tkcm9wOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcclxuICAgIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICAvLyB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuY29udGVzdElkID0gcGFyYW1zWydpZCddO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnbmdPbkluaXQgcGFyYW1zIGlkIChjb250ZXN0SWQpJyk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdElkKTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKSAvL0NVUlJFTlQgRk9DVVNcclxuICAgIC8vICAgICAuc3Vic2NyaWJlKHN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gc3VibWl0aW9uLWRldGFpbHMnKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3VibWl0aW9ucyA9IHN1Ym1pdGlvbnM7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9ucyk7XHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnbmdPbkluaXQgc3VibWl0aW9uIGRldGFpbHMgdGhpcy5zdWJtaXRpb25TJyk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9ucyk7XHJcbiAgICAvLyAgIHRoaXMuc3VibWl0aW9uID0gdGhpcy5zdWJtaXRpb25zLmZpbHRlcigoc3ViKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3N1Yi5zdWJtaXRpb25VcmwnKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhzdWIuc3VibWl0aW9uVXJsKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndGhpcy5zdWJtaXRpb25VcmwnKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvblVybCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHN1Yi5zdWJtaXRpb25VcmwgPT0gdGhpcy5zdWJtaXRpb25VcmxcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCBzdWJtaXRpb24gZGV0YWlscyB0aGlzLnN1Ym1pdGlvbicpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbik7XHJcbiAgfVxyXG5cclxuICAgIGNsb3NlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgY2xvc2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBkaXNtaXNzZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIG9wZW5lZCcpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
