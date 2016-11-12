"use strict";
const core_1 = require('@angular/core');
const Observable_1 = require('rxjs/Observable');
class PushNotificationsService {
    constructor() {
        this.permission = 'granted';
    }
    requestPermission() {
        if ('Notification' in window)
            Notification.requestPermission(status => this.permission = status);
    }
    isSupported() {
        return 'Notification' in window;
    }
    create(title, options) {
        return new Observable_1.Observable(obs => {
            if (!('Notification' in window)) {
                obs.error('Notifications are not available in this envirement');
                obs.complete();
            }
            this.permission = Notification.permission;
            if (this.permission !== 'granted') {
                obs.error(`The user didn't granted you permission to send push notifications`);
                obs.complete();
            }
            const n = new Notification(title, options);
            n.onshow = (e) => obs.next({ notification: n, event: e });
            n.onclick = (e) => obs.next({ notification: n, event: e });
            n.onerror = (e) => obs.error({ notification: n, event: e });
            n.onclose = () => obs.complete();
            n.close = () => {
                n.close.bind(n);
                obs.complete();
            };
        });
    }
}
PushNotificationsService.decorators = [
    { type: core_1.Injectable },
];
PushNotificationsService.ctorParameters = [];
exports.PushNotificationsService = PushNotificationsService;
//# sourceMappingURL=push-notifications.service.js.map