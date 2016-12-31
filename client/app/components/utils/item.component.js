"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// import {Category}from '../../models/category.model'
// import {Ad}from '../../models/ad.model'
//import {ItemListing}from'../../models/item-listing.model'
var Item = (function () {
    function Item() {
        this.itemData = {
            title: '',
            content: '',
            author: '' //,
        };
    }
    __decorate([
        core_1.Input()
    ], Item.prototype, "itemData");
    Item = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'item',
            styleUrls: ['./item.component.css'],
            templateUrl: './item.component.html'
        })
    ], Item);
    return Item;
}());
exports.Item = Item;
;
//# sourceMappingURL=item.component.js.map