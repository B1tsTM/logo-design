import { ElementRef, AfterViewInit, OnDestroy, DoCheck, EventEmitter, IterableDiffers } from '@angular/core';
export declare class UIChart implements AfterViewInit, OnDestroy, DoCheck {
    protected el: ElementRef;
    type: string;
    data: any;
    options: any;
    width: string;
    height: string;
    onDataSelect: EventEmitter<any>;
    initialized: boolean;
    chart: any;
    differ: any;
    constructor(el: ElementRef, differs: IterableDiffers);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    onCanvasClick(event: any): void;
    initChart(): void;
    getCanvas(): any;
    getBase64Image(): any;
    ngOnDestroy(): void;
}
export declare class ChartModule {
}
