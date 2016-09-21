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
var common_1 = require('@angular/common');
var inputtext_1 = require('../inputtext/inputtext');
var forms_1 = require('@angular/forms');
exports.INPUTMASK_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return InputMask; }),
    multi: true
};
var InputMask = (function () {
    function InputMask(el) {
        this.el = el;
        this.clearMaskOnLostFocus = true;
        this.clearIncomplete = true;
        this.onComplete = new core_1.EventEmitter();
        this.onInComplete = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    InputMask.prototype.ngAfterViewInit = function () {
        var _this = this;
        var cfg = {
            mask: this.mask,
            alias: this.alias,
            placeholder: this.slotChar,
            clearIncomplete: this.clearIncomplete,
            clearMaskOnLostFocus: this.clearMaskOnLostFocus,
            onKeyDown: function (event, buffer, caretPos, opts) {
                var val = _this.unmask ? _this.getUnmasekd() : event.target.value;
                _this.onModelChange(val);
            },
            onBeforeWrite: function (event, buffer, caretPos, opts) {
                if (event.target != null) {
                    var val = _this.unmask ? _this.getUnmasekd() : event.target.value;
                    _this.onModelChange(val);
                }
            },
            oncomplete: function (event) {
                _this.onComplete.emit(event);
            },
            onincomplete: function (event) {
                _this.onInComplete.emit(event);
            }
        };
        if (this.options) {
            for (var prop in this.options) {
                if (this.options.hasOwnProperty(prop)) {
                    cfg[prop] = this.options[prop];
                }
            }
        }
        if (this.alias === 'regex')
            jQuery(this.el.nativeElement.children[0])['inputmask']('Regex', cfg);
        else
            jQuery(this.el.nativeElement.children[0])['inputmask'](cfg);
    };
    InputMask.prototype.getUnmasekd = function () {
        var unmaskedVal = jQuery(this.el.nativeElement.children[0])['inputmask']('unmaskedvalue');
        var decimalRegex = /currency|decimal/g;
        if (decimalRegex.test(this.alias) && unmaskedVal && this.options && this.options.radixPoint) {
            unmaskedVal = Number(unmaskedVal.replace(this.options.radixPoint, '.'));
        }
        return unmaskedVal || "";
    };
    InputMask.prototype.writeValue = function (value) {
        this.value = value;
    };
    InputMask.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    InputMask.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    InputMask.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    InputMask.prototype.onBlur = function () {
        this.onModelTouched();
    };
    InputMask.prototype.ngOnDestroy = function () {
        jQuery(this.el.nativeElement.children[0])['inputmask']('remove');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputMask.prototype, "mask", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputMask.prototype, "style", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputMask.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputMask.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputMask.prototype, "slotChar", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputMask.prototype, "alias", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InputMask.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], InputMask.prototype, "unmask", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], InputMask.prototype, "clearMaskOnLostFocus", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], InputMask.prototype, "clearIncomplete", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], InputMask.prototype, "size", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], InputMask.prototype, "maxlength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputMask.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], InputMask.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], InputMask.prototype, "readonly", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InputMask.prototype, "onComplete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InputMask.prototype, "onInComplete", void 0);
    InputMask = __decorate([
        core_1.Component({
            selector: 'p-inputMask',
            template: "<input pInputText type=\"text\" [value]=\"value||''\" (blur)=\"onBlur($event)\" [ngStyle]=\"style\" [ngClass]=\"styleClass\" [placeholder]=\"placeholder\"\n        [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [disabled]=\"disabled\" [readonly]=\"readonly\">",
            providers: [exports.INPUTMASK_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], InputMask);
    return InputMask;
}());
exports.InputMask = InputMask;
var InputMaskModule = (function () {
    function InputMaskModule() {
    }
    InputMaskModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, inputtext_1.InputTextModule],
            exports: [InputMask],
            declarations: [InputMask]
        }), 
        __metadata('design:paramtypes', [])
    ], InputMaskModule);
    return InputMaskModule;
}());
exports.InputMaskModule = InputMaskModule;
//# sourceMappingURL=inputmask.js.map