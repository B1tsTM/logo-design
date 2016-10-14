import { ElementRef, AfterViewInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DomHandler } from '../dom/domhandler';
export declare const INPUTSWITCH_VALUE_ACCESSOR: any;
export declare class InputSwitch implements ControlValueAccessor, AfterViewInit, AfterViewChecked {
    protected el: ElementRef;
    protected domHandler: DomHandler;
    onLabel: string;
    offLabel: string;
    disabled: boolean;
    style: any;
    styleClass: string;
    onChange: EventEmitter<any>;
    checked: boolean;
    focused: boolean;
    onModelChange: Function;
    onModelTouched: Function;
    protected container: any;
    protected handle: any;
    protected onContainer: any;
    protected offContainer: any;
    protected onLabelChild: any;
    protected offLabelChild: any;
    protected offset: any;
    initialized: boolean;
    constructor(el: ElementRef, domHandler: DomHandler);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    render(): void;
    toggle(event: any, checkbox: any): void;
    checkUI(): void;
    uncheckUI(): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    writeValue(checked: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
}
export declare class InputSwitchModule {
}
