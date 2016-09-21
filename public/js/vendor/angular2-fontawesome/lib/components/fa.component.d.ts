import { ElementRef, SimpleChange } from '@angular/core';
export declare class FaComponent {
    static sizeValidator: RegExp;
    static flipValidator: RegExp;
    static pullValidator: RegExp;
    static rotateValidator: RegExp;
    name: string;
    alt: string;
    size: number;
    stack: number;
    flip: string;
    pull: string;
    rotate: number;
    border: boolean;
    spin: boolean;
    fw: boolean;
    inverse: boolean;
    private classList;
    constructor(el: ElementRef);
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    private addFaClass(className);
    private removeFaClass(className);
}
