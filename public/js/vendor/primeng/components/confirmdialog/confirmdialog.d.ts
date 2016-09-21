import { ElementRef, AfterViewInit, OnDestroy, Renderer } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { ConfirmationService, Confirmation } from '../common/api';
import { Subscription } from 'rxjs/Subscription';
export declare class ConfirmDialog implements AfterViewInit, OnDestroy {
    protected el: ElementRef;
    protected domHandler: DomHandler;
    protected renderer: Renderer;
    private confirmationService;
    header: string;
    icon: string;
    message: string;
    acceptIcon: string;
    acceptLabel: string;
    rejectIcon: string;
    rejectLabel: string;
    width: any;
    height: any;
    closeOnEscape: boolean;
    rtl: boolean;
    closable: boolean;
    responsive: boolean;
    appendTo: any;
    footer: any;
    confirmation: Confirmation;
    _visible: boolean;
    documentEscapeListener: any;
    documentResponsiveListener: any;
    mask: any;
    contentContainer: any;
    positionInitialized: boolean;
    subscription: Subscription;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer, confirmationService: ConfirmationService);
    visible: boolean;
    ngAfterViewInit(): void;
    center(): void;
    enableModality(): void;
    disableModality(): void;
    hide(event?: Event): void;
    moveOnTop(): void;
    ngOnDestroy(): void;
    accept(): void;
    reject(): void;
}
export declare class ConfirmDialogModule {
}
