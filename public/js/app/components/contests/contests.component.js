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
var contest_1 = require('../../models/contest');
var contests_service_1 = require('../../services/contests.service');
var ContestsComponent = (function () {
    function ContestsComponent(contestsService) {
        this.contestsService = contestsService;
        this.contestsService.addContest(new contest_1.Contest('Contest1', 'Logo', 'John Lohke'));
        this.contestsService.addContest(new contest_1.Contest('Contest2', 'Logo2', 'John2Lohke'));
        this.contests = contestsService.getContests();
    }
    ContestsComponent.prototype.ngOnInit = function () { };
    ContestsComponent.prototype.onSubmit = function (message) {
        this.contestsService.addContest(new contest_1.Contest(message, 'Dummy', 'Dummy'));
    };
    ContestsComponent.prototype.deleteContest = function (contest) {
        this.contestsService.deleteContest(contest);
    };
    ContestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contests',
            templateUrl: 'contests.component.html',
            styleUrls: ['contests.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService])
    ], ContestsComponent);
    return ContestsComponent;
}());
exports.ContestsComponent = ContestsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsd0JBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFDL0MsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFRbEU7SUFFRSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksaUJBQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxpQkFBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxvQ0FBUSxHQUFSLFVBQVMsT0FBWTtRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsT0FBWTtRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBdEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7O3lCQUFBO0lBbUJGLHdCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSx5QkFBaUIsb0JBa0I3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnY29udGVzdHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29udGVzdHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjb250ZXN0cy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb250ZXN0czogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UpIHtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmFkZENvbnRlc3QobmV3IENvbnRlc3QoJ0NvbnRlc3QxJywgJ0xvZ28nLCAnSm9obiBMb2hrZScpKTsgXHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5hZGRDb250ZXN0KG5ldyBDb250ZXN0KCdDb250ZXN0MicsICdMb2dvMicsICdKb2huMkxvaGtlJykpOyBcclxuICAgIHRoaXMuY29udGVzdHMgPSBjb250ZXN0c1NlcnZpY2UuZ2V0Q29udGVzdHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIG9uU3VibWl0KG1lc3NhZ2U6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuYWRkQ29udGVzdChuZXcgQ29udGVzdChtZXNzYWdlLCAnRHVtbXknLCAnRHVtbXknKSlcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNvbnRlc3QoY29udGVzdDogYW55KSB7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5kZWxldGVDb250ZXN0KGNvbnRlc3QpO1xyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
