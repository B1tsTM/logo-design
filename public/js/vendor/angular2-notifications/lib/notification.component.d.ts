import { OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Notification } from './notification.type';
import { NotificationsService } from './notifications.service';
export declare class NotificationComponent implements OnInit, OnDestroy {
    private notificationService;
    private domSanitizer;
    timeOut: number;
    showProgressBar: boolean;
    pauseOnHover: boolean;
    clickToClose: boolean;
    maxLength: number;
    theClass: string;
    rtl: boolean;
    animate: string;
    position: number;
    item: Notification;
    progressWidth: number;
    private stopTime;
    private timer;
    private steps;
    private speed;
    private count;
    private start;
    private diff;
    private safeSvg;
    constructor(notificationService: NotificationsService, domSanitizer: DomSanitizer);
    ngOnInit(): void;
    startTimeOut(): void;
    onEnter(): void;
    onLeave(): void;
    setPosition(): number;
    onClick($e: any): void;
    attachOverrides(): void;
    ngOnDestroy(): void;
    private instance;
    private remove();
}
