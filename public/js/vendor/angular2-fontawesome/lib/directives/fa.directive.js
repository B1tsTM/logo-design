"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FaDirective = (function () {
    function FaDirective(el) {
        this.el = el.nativeElement;
        this.el.classList.add('fa');
    }
    FaDirective.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            var previousValue = changes[key].previousValue;
            var currentValue = changes[key].currentValue;
            switch (key) {
                case 'name':
                    if (typeof previousValue === 'string') {
                        this.el.classList.remove("fa-" + previousValue);
                    }
                    this.el.classList.add("fa-" + currentValue);
                    break;
                case 'alt':
                    break;
                case 'size':
                    if (FaDirective.sizeValidator.test(currentValue)) {
                        if (previousValue === 1) {
                            this.el.classList.remove('fa-lg');
                        }
                        else if (typeof previousValue === 'string') {
                            this.el.classList.remove("fa-" + previousValue + "x");
                        }
                        if (currentValue === 1) {
                            this.el.classList.add('fa-lg');
                        }
                        else {
                            this.el.classList.add("fa-" + currentValue + "x");
                        }
                    }
                    break;
                case 'stack':
                    if (FaDirective.sizeValidator.test(currentValue)) {
                        if (typeof previousValue === 'string') {
                            this.el.classList.remove("fa-stack-" + previousValue + "x");
                        }
                        this.el.classList.add("fa-stack-" + currentValue + "x");
                    }
                    break;
                case 'flip':
                    if (FaDirective.flipValidator.test(currentValue)) {
                        if (typeof previousValue === 'string') {
                            this.el.classList.remove("fa-flip-" + previousValue);
                        }
                        this.el.classList.add("fa-flip-" + currentValue);
                    }
                    break;
                case 'pull':
                    if (FaDirective.pullValidator.test(currentValue)) {
                        if (typeof previousValue === 'string') {
                            this.el.classList.remove("fa-pull-" + previousValue);
                        }
                        this.el.classList.add("fa-pull-" + currentValue);
                    }
                    break;
                case 'rotate':
                    if (FaDirective.rotateValidator.test(currentValue)) {
                        if (typeof previousValue === 'string') {
                            this.el.classList.remove("fa-rotate-" + previousValue);
                        }
                        this.el.classList.add("fa-rotate-" + currentValue);
                    }
                    break;
                case 'border':
                    if (currentValue) {
                        this.el.classList.add('fa-border');
                    }
                    else if (typeof previousValue === 'string') {
                        this.el.classList.remove('fa-border');
                    }
                    break;
                case 'spin':
                    if (currentValue) {
                        this.el.classList.add('fa-spin');
                    }
                    else if (typeof previousValue === 'string') {
                        this.el.classList.remove('fa-spin');
                    }
                    break;
                case 'fw':
                    if (currentValue) {
                        this.el.classList.add('fa-fw');
                    }
                    else if (typeof previousValue === 'string') {
                        this.el.classList.remove('fa-fw');
                    }
                    break;
                case 'inverse':
                    if (currentValue) {
                        this.el.classList.add('fa-inverse');
                    }
                    else if (typeof previousValue === 'string') {
                        this.el.classList.remove('fa-inverse');
                    }
                    break;
            }
        }
    };
    FaDirective.sizeValidator = /[1-5]/;
    FaDirective.flipValidator = /['horizontal'|'vertical']/;
    FaDirective.pullValidator = /['right'|'left']/;
    FaDirective.rotateValidator = /[90|180|270]/;
    FaDirective = __decorate([
        core_1.Directive({
            selector: '[fa]',
            inputs: ['name', 'alt', 'size', 'stack', 'flip', 'pull', 'rotate', 'border', 'spin', 'fw', 'inverse']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FaDirective);
    return FaDirective;
}());
exports.FaDirective = FaDirective;
//# sourceMappingURL=fa.directive.js.map