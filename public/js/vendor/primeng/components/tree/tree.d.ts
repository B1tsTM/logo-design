import { AfterContentInit, EventEmitter, OnInit, ViewContainerRef, QueryList, TemplateRef } from '@angular/core';
import { TreeNode } from '../common/api';
export declare class TreeNodeTemplateLoader implements OnInit {
    protected viewContainer: ViewContainerRef;
    node: any;
    template: TemplateRef<any>;
    constructor(viewContainer: ViewContainerRef);
    ngOnInit(): void;
}
export declare class UITreeNode {
    protected tree: Tree;
    static ICON_CLASS: string;
    node: TreeNode;
    hover: boolean;
    constructor(tree: Tree);
    getIcon(): string;
    isLeaf(): boolean;
    toggle(event: any): void;
    onNodeClick(event: any): void;
    onNodeRightClick(event: any): void;
    isSelected(): boolean;
}
export declare class Tree implements AfterContentInit {
    value: TreeNode[];
    selectionMode: string;
    selection: any;
    selectionChange: EventEmitter<any>;
    onNodeSelect: EventEmitter<any>;
    onNodeUnselect: EventEmitter<any>;
    onNodeExpand: EventEmitter<any>;
    onNodeCollapse: EventEmitter<any>;
    onNodeContextMenuSelect: EventEmitter<any>;
    style: any;
    styleClass: string;
    contextMenu: any;
    templates: QueryList<any>;
    protected templateMap: any;
    ngAfterContentInit(): void;
    onNodeClick(event: any, node: TreeNode): void;
    onNodeRightClick(event: any, node: TreeNode): void;
    findIndexInSelection(node: TreeNode): number;
    isSelected(node: TreeNode): boolean;
    isSingleSelectionMode(): boolean;
    isMultipleSelectionMode(): boolean;
    expandToNode(node: TreeNode): void;
    findPathToNode(node: TreeNode): TreeNode[];
    private static findPathToNodeRecursive(searchingFor, searchingIn);
    getTemplateForNode(node: TreeNode): TemplateRef<any>;
}
export declare class TreeModule {
}
