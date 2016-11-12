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
var Subject_1 = require('rxjs/Subject');
var icons_1 = require('./icons');
var NotificationsService = (function () {
    function NotificationsService() {
        this.emitter = new Subject_1.Subject();
        this.icons = icons_1.defaultIcons;
    }
    NotificationsService.prototype.set = function (notification, to) {
        notification.id = notification.override && notification.override.id ? notification.override.id : Math.random().toString(36).substring(3);
        this.emitter.next({ command: 'set', notification: notification, add: to });
        return notification;
    };
    ;
    NotificationsService.prototype.getChangeEmitter = function () {
        return this.emitter;
    };
    NotificationsService.prototype.success = function (title, content, override) {
        return this.set({
            title: title,
            content: content,
            type: 'success',
            icon: this.icons.success,
            override: override
        }, true);
    };
    NotificationsService.prototype.error = function (title, content, override) {
        return this.set({ title: title, content: content, type: 'error', icon: this.icons.error, override: override }, true);
    };
    NotificationsService.prototype.alert = function (title, content, override) {
        return this.set({ title: title, content: content, type: 'alert', icon: this.icons.alert, override: override }, true);
    };
    NotificationsService.prototype.info = function (title, content, override) {
        return this.set({ title: title, content: content, type: 'info', icon: this.icons.info, override: override }, true);
    };
    NotificationsService.prototype.bare = function (title, content, override) {
        return this.set({ title: title, content: content, type: 'bare', icon: 'bare', override: override }, true);
    };
    NotificationsService.prototype.create = function (title, content, type, override) {
        return this.set({ title: title, content: content, type: type, icon: 'bare', override: override }, true);
    };
    NotificationsService.prototype.html = function (html, type, override) {
        return this.set({ html: html, type: type, icon: 'bare', override: override, title: null, content: null }, true);
    };
    NotificationsService.prototype.remove = function (id) {
        if (id) {
            this.emitter.next({ command: 'clean', id: id });
        }
        else {
            this.emitter.next({ command: 'cleanAll' });
        }
    };
    NotificationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsd0JBQXNCLGNBQWMsQ0FBQyxDQUFBO0FBR3JDLHNCQUFrQyxTQUFTLENBQUMsQ0FBQTtBQUc1QztJQUFBO1FBRVUsWUFBTyxHQUErQixJQUFJLGlCQUFPLEVBQXFCLENBQUM7UUFDdkUsVUFBSyxHQUFVLG9CQUFZLENBQUM7SUEwRHRDLENBQUM7SUF4REMsa0NBQUcsR0FBSCxVQUFJLFlBQTBCLEVBQUUsRUFBVztRQUN6QyxZQUFZLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxRQUFRLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN0QixDQUFDOztJQUVELCtDQUFnQixHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFHRCxzQ0FBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLE9BQWUsRUFBRSxRQUFjO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2QsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxJQUFJ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LENBQUMsQUE3REQsSUE2REM7QUE3RFksNEJBQW9CLHVCQTZEaEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcy9TdWJqZWN0JztcclxuaW1wb3J0IHtOb3RpZmljYXRpb25FdmVudH0gZnJvbSAnLi9ub3RpZmljYXRpb24tZXZlbnQudHlwZSc7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tICcuL25vdGlmaWNhdGlvbi50eXBlJztcclxuaW1wb3J0IHtJY29ucywgZGVmYXVsdEljb25zfSBmcm9tICcuL2ljb25zJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBlbWl0dGVyOiBTdWJqZWN0PE5vdGlmaWNhdGlvbkV2ZW50PiA9IG5ldyBTdWJqZWN0PE5vdGlmaWNhdGlvbkV2ZW50PigpO1xyXG4gIHByaXZhdGUgaWNvbnM6IEljb25zID0gZGVmYXVsdEljb25zO1xyXG5cclxuICBzZXQobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24sIHRvOiBib29sZWFuKSB7XHJcbiAgICBub3RpZmljYXRpb24uaWQgPSBub3RpZmljYXRpb24ub3ZlcnJpZGUgJiYgbm90aWZpY2F0aW9uLm92ZXJyaWRlLmlkID8gbm90aWZpY2F0aW9uLm92ZXJyaWRlLmlkIDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDMpO1xyXG4gICAgdGhpcy5lbWl0dGVyLm5leHQoe2NvbW1hbmQ6ICdzZXQnLCBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvbiwgYWRkOiB0b30pO1xyXG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbjtcclxuICB9O1xyXG5cclxuICBnZXRDaGFuZ2VFbWl0dGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlcjtcclxuICB9XHJcblxyXG4gIC8vLy8gQWNjZXNzIG1ldGhvZHNcclxuICBzdWNjZXNzKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3ZlcnJpZGU/OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLnNldCh7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICBpY29uOiB0aGlzLmljb25zLnN1Y2Nlc3MsXHJcbiAgICAgIG92ZXJyaWRlOiBvdmVycmlkZVxyXG4gICAgfSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBlcnJvcih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG92ZXJyaWRlPzogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXQoe3RpdGxlOiB0aXRsZSwgY29udGVudDogY29udGVudCwgdHlwZTogJ2Vycm9yJywgaWNvbjogdGhpcy5pY29ucy5lcnJvciwgb3ZlcnJpZGU6IG92ZXJyaWRlfSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBhbGVydCh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG92ZXJyaWRlPzogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXQoe3RpdGxlOiB0aXRsZSwgY29udGVudDogY29udGVudCwgdHlwZTogJ2FsZXJ0JywgaWNvbjogdGhpcy5pY29ucy5hbGVydCwgb3ZlcnJpZGU6IG92ZXJyaWRlfSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBpbmZvKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3ZlcnJpZGU/OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLnNldCh7dGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50LCB0eXBlOiAnaW5mbycsIGljb246IHRoaXMuaWNvbnMuaW5mbywgb3ZlcnJpZGU6IG92ZXJyaWRlfSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBiYXJlKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3ZlcnJpZGU/OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLnNldCh7dGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50LCB0eXBlOiAnYmFyZScsIGljb246ICdiYXJlJywgb3ZlcnJpZGU6IG92ZXJyaWRlfSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBXaXRoIHR5cGUgbWV0aG9kXHJcbiAgY3JlYXRlKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCBvdmVycmlkZT86IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0KHt0aXRsZTogdGl0bGUsIGNvbnRlbnQ6IGNvbnRlbnQsIHR5cGU6IHR5cGUsIGljb246ICdiYXJlJywgb3ZlcnJpZGU6IG92ZXJyaWRlfSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBIVE1MIE5vdGlmaWNhdGlvbiBtZXRob2RcclxuICBodG1sKGh0bWw6IGFueSwgdHlwZTogc3RyaW5nLCBvdmVycmlkZT86IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0KHtodG1sOiBodG1sLCB0eXBlOiB0eXBlLCBpY29uOiAnYmFyZScsIG92ZXJyaWRlOiBvdmVycmlkZSwgdGl0bGU6IG51bGwsIGNvbnRlbnQ6IG51bGx9LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBhbGwgbm90aWZpY2F0aW9ucyBtZXRob2RcclxuICByZW1vdmUoaWQ/OiBzdHJpbmcpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB0aGlzLmVtaXR0ZXIubmV4dCh7Y29tbWFuZDogJ2NsZWFuJywgaWQ6IGlkfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVtaXR0ZXIubmV4dCh7Y29tbWFuZDogJ2NsZWFuQWxsJ30pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19