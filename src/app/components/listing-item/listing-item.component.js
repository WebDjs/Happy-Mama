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
var ListingItemComponent = (function () {
    function ListingItemComponent() {
        this.itemData = {
            title: '',
            content: '',
            username: '',
            date: ''
        };
        this.deleteItemListing = new core_1.EventEmitter();
    }
    ListingItemComponent.prototype.removeListingItem = function () {
        console.log('Deleted');
        this.deleteItemListing.next();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListingItemComponent.prototype, "itemData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListingItemComponent.prototype, "deleteItemListing", void 0);
    ListingItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listing-item',
            styleUrls: ['./listing-item.component.css'],
            templateUrl: './listing-item.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ListingItemComponent);
    return ListingItemComponent;
}());
exports.ListingItemComponent = ListingItemComponent;
//# sourceMappingURL=listing-item.component.js.map