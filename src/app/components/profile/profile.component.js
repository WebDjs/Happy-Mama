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
var router_1 = require('@angular/router');
var user_model_1 = require('../../models/user.model');
var data_service_1 = require('../../services/data.service');
var creator_service_1 = require('../../services/creator.service');
var validator_service_1 = require('../../services/validator.service');
var index_1 = require('angular2-toastr/index');
var ProfileComponent = (function () {
    function ProfileComponent(dataService, creatorService, appRouter, validator, notifier) {
        this.dataService = dataService;
        this.creatorService = creatorService;
        this.appRouter = appRouter;
        this.validator = validator;
        this.notifier = notifier;
        this.currentUser = new user_model_1.User();
        this.currentUser.image = './assets/images/emptyProfile.jpg';
    }
    ProfileComponent.prototype.Image = function () {
        return this.currentUser.image;
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            styleUrls: ['./profile.component.css'],
            templateUrl: './profile.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, creator_service_1.CreatorService, router_1.Router, validator_service_1.ValidatorService, index_1.ToasterService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map