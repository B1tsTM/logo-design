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
        __metadata('design:type', String)
    ], SubmitionDetailsComponent.prototype, "submitionUrl", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFFekQsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFRakU7SUFVRSxtQ0FBb0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsS0FBcUIsRUFDckIsTUFBYztRQUhkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVZoQyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBcUIsSUFBSSxDQUFDO0lBS0csQ0FBQztJQUV4Qyw0Q0FBUSxHQUFSO1FBQ0Usb0RBQW9EO1FBQ3BELG1DQUFtQztRQUNuQyxtREFBbUQ7UUFDbkQsaUNBQWlDO1FBQ2pDLE1BQU07UUFDTix1RUFBdUU7UUFDdkUsaUNBQWlDO1FBQ2pDLDBFQUEwRTtRQUMxRSxtQ0FBbUM7UUFDbkMsd0NBQXdDO1FBQ3hDLHdDQUF3QztRQUN4QyxTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLDhDQUE4QztRQUM5QyxRQUFRO1FBQ1IsK0RBQStEO1FBQy9ELGtDQUFrQztRQUNsQyx1REFBdUQ7UUFDdkQsdUNBQXVDO1FBQ3ZDLHFDQUFxQztRQUNyQyx3Q0FBd0M7UUFDeEMsc0NBQXNDO1FBQ3RDLG1EQUFtRDtRQUNuRCxRQUFRO1FBQ1IsOERBQThEO1FBQzlELGlDQUFpQztJQUNuQyxDQUFDO0lBRUMsMENBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDZDQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDBDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFyREQ7UUFBQyxZQUFLLEVBQUU7O2dFQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O21FQUFBO0lBUlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQyxDQUFDOztpQ0FBQTtJQXlERixnQ0FBQztBQUFELENBeERBLEFBd0RDLElBQUE7QUF4RFksaUNBQXlCLDRCQXdEckMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL3N1Ym1pdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3N1Ym1pdGlvbi1kZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJ3N1Ym1pdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJtaXRpb25EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGNvbnRlc3RJZDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc3VibWl0aW9uVXJsOiBzdHJpbmc7XHJcbiAgICBjc3NDbGFzczogc3RyaW5nID0gJyc7XHJcbiAgICBzdWJtaXRpb246IGFueTtcclxuICAgIHN1Ym1pdGlvbnM6IGFueVtdID0gW107XHJcbiAgICBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgYmFja2Ryb3A6IHN0cmluZyB8IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIC8vIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgIC8vICAgdGhpcy5jb250ZXN0SWQgPSBwYXJhbXNbJ2lkJ107XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCBwYXJhbXMgaWQgKGNvbnRlc3RJZCknKTtcclxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0SWQpO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyB0aGlzLmFwaVNlcnZpY2UuZ2V0Q29udGVzdFN1Ym1pdGlvbnModGhpcy5jb250ZXN0SWQpIC8vQ1VSUkVOVCBGT0NVU1xyXG4gICAgLy8gICAgIC5zdWJzY3JpYmUoc3VibWl0aW9ucyA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRpb25zIGZyb20gYXBpc2VydmljZSBpbiBzdWJtaXRpb24tZGV0YWlscycpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRpb25zKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdWJtaXRpb25zID0gc3VibWl0aW9ucztcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb25zKTtcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGVycm9yID0+IHtcclxuICAgIC8vICAgICAgIHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCBzdWJtaXRpb24gZGV0YWlscyB0aGlzLnN1Ym1pdGlvblMnKTtcclxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb25zKTtcclxuICAgIC8vICAgdGhpcy5zdWJtaXRpb24gPSB0aGlzLnN1Ym1pdGlvbnMuZmlsdGVyKChzdWIpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnc3ViLnN1Ym1pdGlvblVybCcpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHN1Yi5zdWJtaXRpb25VcmwpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnN1Ym1pdGlvblVybCcpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9uVXJsKTtcclxuICAgIC8vICAgICByZXR1cm4gc3ViLnN1Ym1pdGlvblVybCA9PSB0aGlzLnN1Ym1pdGlvblVybFxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25nT25Jbml0IHN1Ym1pdGlvbiBkZXRhaWxzIHRoaXMuc3VibWl0aW9uJyk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9uKTtcclxuICB9XHJcblxyXG4gICAgY2xvc2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBjbG9zZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIGRpc21pc3NlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5lZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgb3BlbmVkJyk7XHJcbiAgICB9XHJcblxyXG59Il19
