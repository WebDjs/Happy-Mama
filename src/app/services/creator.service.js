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
var user_model_1 = require('./../models/user.model');
var babysitter_model_1 = require('./../models/babysitter.model');
var babysitter_details_model_1 = require('./../models/babysitter.details.model');
var like_model_1 = require('./../models/like.model');
var nav_model_1 = require('./../models/nav.model');
var CreatorService = (function () {
    function CreatorService() {
    }
    CreatorService.prototype.createNav = function () {
        return new nav_model_1.Nav();
    };
    CreatorService.prototype.createBabysitter = function () {
        var babysitter = new babysitter_model_1.Babysitter();
        var babysitterDeatails = new babysitter_details_model_1.BabysitterDetails();
        var like = new like_model_1.Like();
        like.number = 0;
        like.value = 1;
        like.valueMean = like.number / like.value;
        babysitter.babysitterDetails = babysitterDeatails;
        babysitter.likes = like;
        return babysitter;
    };
    CreatorService.prototype.createUser = function () {
        var newUser = new user_model_1.User();
        newUser.isBabysitter = false;
        newUser.createdOn = new Date();
        return newUser;
    };
    CreatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CreatorService);
    return CreatorService;
}());
exports.CreatorService = CreatorService;
//# sourceMappingURL=creator.service.js.map