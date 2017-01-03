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
var data_service_1 = require('../../services/data.service');
var ListingsComponent = (function () {
    function ListingsComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.listings = [];
        this.isSubmenuVisible = false;
        this.isFormVisible = false;
        this.dataService.getListings().subscribe(function (listings) { _this.listings = listings; });
        this.listingItem = {
            title: '',
            category: '',
            content: '',
            username: '',
            date: new Date(),
            isDeleted: false
        };
        this.listings;
    }
    ListingsComponent.prototype.ngOnInit = function () {
    };
    ListingsComponent.prototype.toggleSubmenu = function () {
        this.isSubmenuVisible = !this.isSubmenuVisible;
    };
    ListingsComponent.prototype.toggleForm = function () {
        this.isFormVisible = !this.isFormVisible;
    };
    ListingsComponent.prototype.addListingItem = function (item) {
        var _this = this;
        console.log(item);
        var newItemListing = {
            title: item.title,
            category: item.category,
            content: item.content,
            username: localStorage.getItem('username'),
            date: new Date(),
            isDeleted: false
        };
        console.log(JSON.stringify(newItemListing));
        this.dataService.addListingItem(newItemListing).subscribe(function (listingItem) {
            _this.listings.push(listingItem);
            console.log(listingItem);
            _this.title = '',
                _this.category = '',
                _this.content = '',
                _this.username = localStorage.getItem('username'),
                _this.date = new Date(),
                _this.isDeleted = false;
            _this.dataService.getListings().subscribe(function (listings) { _this.listings = listings; });
            _this.listings;
        });
    };
    ListingsComponent.prototype.removeListingItem = function (listingItem) {
        console.log(listingItem);
        listingItem.isDeleted = true;
        var index = this.listings.findIndex(function (currentListingItem) { return currentListingItem.isDeleted === true; });
        console.log(index);
        this.dataService.deleteListingItem(listingItem).subscribe(function (ok) { console.log(ok); });
        this.listings.splice(index, 1);
        this.listings;
    };
    ListingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listings',
            styleUrls: ['./listings.component.css'],
            templateUrl: './listings.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ListingsComponent);
    return ListingsComponent;
}());
exports.ListingsComponent = ListingsComponent;
//# sourceMappingURL=listings.component.js.map