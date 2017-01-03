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
var invert_color_1 = require('../utils/invert-color');
var core_1 = require('@angular/core');
var DEFAULT_BG_COLOR = 'black', DEFAULT_HIGHLIGHT_SELECT_CLASS = 'highlight-item-selected';
var HighlightItemDirective = (function () {
    function HighlightItemDirective(element) {
        this.element = element;
    }
    Object.defineProperty(HighlightItemDirective.prototype, "highlightSelectClass", {
        get: function () {
            return this._highlightSelectClass || DEFAULT_HIGHLIGHT_SELECT_CLASS;
        },
        set: function (className) {
            this._highlightSelectClass = className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightItemDirective.prototype, "bgColor", {
        get: function () {
            return this._bgColor || DEFAULT_BG_COLOR;
        },
        set: function (bgColor) {
            this._bgColor = bgColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightItemDirective.prototype, "fontColor", {
        get: function () {
            var invertedColor = invert_color_1.invert(this.bgColor);
            return invertedColor.toString();
        },
        enumerable: true,
        configurable: true
    });
    HighlightItemDirective.prototype.onItemClick = function () {
        var oldElement = document.getElementsByClassName(this.highlightSelectClass)[0];
        if (oldElement) {
            oldElement.classList.remove(this.highlightSelectClass);
            oldElement.parentElement.style.color = '';
            oldElement.parentElement.style.background = '';
        }
        this.element.nativeElement.classList.add(this.highlightSelectClass);
        this.element.nativeElement.parentElement.style.color = this.fontColor;
        this.element.nativeElement.parentElement.style.background = this.bgColor;
    };
    __decorate([
        core_1.Input('hightlight-select-class'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HighlightItemDirective.prototype, "highlightSelectClass", null);
    __decorate([
        core_1.Input('hightlight-color'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HighlightItemDirective.prototype, "bgColor", null);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighlightItemDirective.prototype, "onItemClick", null);
    HighlightItemDirective = __decorate([
        core_1.Directive({
            selector: '[hightlight-item]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighlightItemDirective);
    return HighlightItemDirective;
}());
exports.HighlightItemDirective = HighlightItemDirective;
;
//# sourceMappingURL=HighlightItemDirective.js.map