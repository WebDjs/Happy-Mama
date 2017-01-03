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
var data_service_1 = require('../../services/data.service');
var creator_service_1 = require('../../services/creator.service');
var validator_service_1 = require('../../services/validator.service');
var index_1 = require('angular2-toastr/index');
var BabysitterRegistrationComponent = (function () {
    function BabysitterRegistrationComponent(dataService, creatorService, appRouter, validator, notifier) {
        var _this = this;
        this.dataService = dataService;
        this.creatorService = creatorService;
        this.appRouter = appRouter;
        this.validator = validator;
        this.notifier = notifier;
        this.dataService.getBabysitters().subscribe(function (babysitters) { _this.babysitters = babysitters; });
    }
    BabysitterRegistrationComponent.prototype.addBabysitter = function () {
        var _this = this;
        var newBabysitter = {
            name: this.name,
            age: this.age,
            image: this.image,
            email: this.email
        };
        this.dataService.addBabysitter(newBabysitter).subscribe(function (babysitter) {
            _this.babysitters.push(babysitter);
            _this.name = '';
            _this.age = '';
            _this.image = '';
            _this.email = '';
            _this.dataService.getBabysitters().subscribe(function (babysitters) { _this.babysitters = babysitters; });
        });
    };
    BabysitterRegistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'babysitter-registration',
            styleUrls: ['./babysitter-registration.component.css'],
            templateUrl: './babysitter-registration.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, creator_service_1.CreatorService, router_1.Router, validator_service_1.ValidatorService, index_1.ToasterService])
    ], BabysitterRegistrationComponent);
    return BabysitterRegistrationComponent;
}());
exports.BabysitterRegistrationComponent = BabysitterRegistrationComponent;
//# sourceMappingURL=babysitter-registration.component.js.map