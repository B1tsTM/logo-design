import { AfterViewInit, AfterViewChecked, EventEmitter, ElementRef } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class Terminal implements AfterViewInit, AfterViewChecked {
    protected el: ElementRef;
    protected domHandler: DomHandler;
    welcomeMessage: string;
    prompt: string;
    style: any;
    styleClass: string;
    responseChange: EventEmitter<any>;
    handler: EventEmitter<any>;
    commands: any[];
    command: string;
    container: any;
    commandProcessed: boolean;
    constructor(el: ElementRef, domHandler: DomHandler);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    response: string;
    handleCommand(event: any, container: any): void;
    focus(element: any): void;
}
export declare class TerminalModule {
}
