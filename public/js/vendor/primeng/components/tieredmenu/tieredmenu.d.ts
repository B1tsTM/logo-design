import { ElementRef, AfterViewInit, OnDestroy, Renderer } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { MenuItem } from '../common/api';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
export declare class TieredMenuSub {
    protected domHandler: DomHandler;
    protected router: Router;
    protected location: Location;
    item: MenuItem;
    root: boolean;
    constructor(domHandler: DomHandler, router: Router, location: Location);
    activeItem: any;
    activeLink: any;
    onItemMouseEnter(event: any, item: any, menuitem: MenuItem): void;
    onItemMouseLeave(event: any, link: any): void;
    itemClick(event: any, item: MenuItem): boolean;
    listClick(event: any): void;
}
export declare class TieredMenu implements AfterViewInit, OnDestroy {
    protected el: ElementRef;
    protected domHandler: DomHandler;
    protected renderer: Renderer;
    model: MenuItem[];
    popup: boolean;
    style: any;
    styleClass: string;
    container: any;
    documentClickListener: any;
    preventDocumentDefault: any;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer);
    ngAfterViewInit(): void;
    toggle(event: any): void;
    show(event: any): void;
    hide(): void;
    unsubscribe(item: any): void;
    ngOnDestroy(): void;
}
export declare class TieredMenuModule {
}
