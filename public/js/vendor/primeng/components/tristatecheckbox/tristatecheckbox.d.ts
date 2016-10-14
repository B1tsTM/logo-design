import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const TRISTATECHECKBOX_VALUE_ACCESSOR: any;
export declare class TriStateCheckbox implements ControlValueAccessor {
    disabled: boolean;
    name: string;
    onChange: EventEmitter<any>;
    hover: boolean;
    focus: boolean;
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    onClick(event: any, input: any): void;
    onKeydown(event: any): void;
    onKeyup(event: any): void;
    toggle(event: any): void;
    onFocus(): void;
    onBlur(): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    writeValue(value: any): void;
    setDisabledState(disabled: boolean): void;
}
export declare class TriStateCheckboxModule {
}
