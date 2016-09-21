import { ElementRef, EventEmitter, AfterContentInit, QueryList } from '@angular/core';
export declare class TabPanel {
    header: string;
    selected: boolean;
    disabled: boolean;
    closable: boolean;
    headerStyle: any;
    headerStyleClass: string;
    leftIcon: string;
    rightIcon: string;
    hoverHeader: boolean;
    closed: boolean;
}
export declare class TabView implements AfterContentInit {
    protected el: ElementRef;
    orientation: string;
    style: any;
    styleClass: string;
    tabPanels: QueryList<TabPanel>;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    initialized: boolean;
    tabs: TabPanel[];
    constructor(el: ElementRef);
    ngAfterContentInit(): void;
    initTabs(): void;
    open(event: any, tab: TabPanel): void;
    close(event: any, tab: TabPanel): void;
    findSelectedTab(): TabPanel;
    findTabIndex(tab: TabPanel): number;
    getDefaultHeaderClass(tab: TabPanel): string;
}
export declare class TabViewModule {
}
