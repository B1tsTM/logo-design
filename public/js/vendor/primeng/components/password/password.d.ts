import { ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class Password implements AfterViewInit, OnDestroy {
    protected el: ElementRef;
    protected domHandler: DomHandler;
    promptLabel: string;
    weakLabel: string;
    mediumLabel: string;
    strongLabel: string;
    hover: boolean;
    focus: boolean;
    panel: any;
    meter: any;
    info: any;
    constructor(el: ElementRef, domHandler: DomHandler);
    ngAfterViewInit(): void;
    onMouseover(e: any): void;
    onMouseout(e: any): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    onKeyup(e: any): void;
    testStrength(str: string): number;
    normalize(x: any, y: any): number;
    isDisabled(): any;
    ngOnDestroy(): void;
}
export declare class PasswordModule {
}
