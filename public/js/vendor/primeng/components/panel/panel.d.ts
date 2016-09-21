import { EventEmitter } from '@angular/core';
export declare class Panel {
    toggleable: boolean;
    header: string;
    collapsed: boolean;
    style: any;
    styleClass: string;
    collapsedChange: EventEmitter<any>;
    onBeforeToggle: EventEmitter<any>;
    onAfterToggle: EventEmitter<any>;
    protected hoverToggler: boolean;
    protected animating: boolean;
    toggle(event: any): void;
    expand(event: any): void;
    collapse(event: any): void;
}
export declare class PanelModule {
}
