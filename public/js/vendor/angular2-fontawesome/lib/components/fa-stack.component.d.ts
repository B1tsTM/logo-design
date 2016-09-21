import { SimpleChange } from '@angular/core';
export declare class FaStackComponent {
    size: number;
    private classList;
    constructor();
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    private addFaClass(className);
    private removeFaClass(className);
}
