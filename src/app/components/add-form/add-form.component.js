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
var AddFormComponent = (function () {
    function AddFormComponent() {
        this.listingItemCreated = new core_1.EventEmitter();
        this.isFormVisible = false;
        this.listingItemForm = {
            title: '',
            category: '',
            content: '',
            username: localStorage.getItem('username'),
            date: new Date(),
            isDeleted: false
        };
    }
    AddFormComponent.prototype.addListingItem = function () {
        var _a = this.listingItemForm, title = _a.title, category = _a.category, content = _a.content, username = _a.username, date = _a.date, isDeleted = _a.isDeleted;
        if (title && category && content && username && date && !isDeleted) {
            this.listingItemCreated.next({ title: title, category: category, content: content, username: username, date: date, isDeleted: isDeleted });
            this.listingItemForm.title = '';
            this.listingItemForm.category = '';
            this.listingItemForm.content = '';
        }
    };
    AddFormComponent.prototype.toggleForm = function () {
        this.isFormVisible = !this.isFormVisible;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddFormComponent.prototype, "listingItemCreated", void 0);
    AddFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-form',
            styleUrls: ['./add-form.component.css'],
            templateUrl: './add-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AddFormComponent);
    return AddFormComponent;
}());
exports.AddFormComponent = AddFormComponent;
//# sourceMappingURL=add-form.component.js.map