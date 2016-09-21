import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const RADIO_VALUE_ACCESSOR: any;
export declare class RadioButton implements ControlValueAccessor {
    value: any;
    name: string;
    disabled: boolean;
    label: string;
    onClick: EventEmitter<any>;
    protected model: any;
    protected onModelChange: Function;
    protected onModelTouched: Function;
    protected checked: boolean;
    protected hover: boolean;
    protected focused: boolean;
    handleClick(): void;
    select(): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onChange(event: any): void;
}
export declare class RadioButtonModule {
}
