import { EventEmitter, ViewContainerRef, TemplateRef, OnInit, AfterContentInit, QueryList } from '@angular/core';
export declare class Header {
}
export declare class Footer {
}
export declare class PrimeTemplate {
    protected template: TemplateRef<any>;
    type: string;
    constructor(template: TemplateRef<any>);
}
export declare class TemplateWrapper implements OnInit {
    protected viewContainer: ViewContainerRef;
    item: any;
    templateRef: TemplateRef<any>;
    constructor(viewContainer: ViewContainerRef);
    ngOnInit(): void;
}
export declare class Column implements AfterContentInit {
    field: string;
    header: string;
    footer: string;
    sortable: any;
    editable: boolean;
    filter: boolean;
    filterMatchMode: string;
    rowspan: number;
    colspan: number;
    style: any;
    styleClass: string;
    hidden: boolean;
    expander: boolean;
    selectionMode: string;
    sortFunction: EventEmitter<any>;
    templates: QueryList<any>;
    template: TemplateRef<any>;
    protected headerTemplate: TemplateRef<any>;
    protected bodyTemplate: TemplateRef<any>;
    protected footerTemplate: TemplateRef<any>;
    ngAfterContentInit(): void;
}
export declare class ColumnBodyTemplateLoader {
    protected viewContainer: ViewContainerRef;
    column: any;
    rowData: any;
    rowIndex: number;
    constructor(viewContainer: ViewContainerRef);
    ngOnInit(): void;
}
export declare class ColumnHeaderTemplateLoader {
    protected viewContainer: ViewContainerRef;
    column: any;
    constructor(viewContainer: ViewContainerRef);
    ngOnInit(): void;
}
export declare class ColumnFooterTemplateLoader {
    protected viewContainer: ViewContainerRef;
    column: any;
    constructor(viewContainer: ViewContainerRef);
    ngOnInit(): void;
}
export declare class TemplateLoader {
    protected viewContainer: ViewContainerRef;
    template: TemplateRef<any>;
    constructor(viewContainer: ViewContainerRef);
    ngOnInit(): void;
}
export declare class SharedModule {
}
