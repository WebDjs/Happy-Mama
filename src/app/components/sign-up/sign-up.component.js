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
var hashing_service_1 = require('../../services/hashing.service');
var index_js_1 = require('../../local-storage/index.js');
var validator_service_1 = require('../../services/validator.service');
var index_1 = require('angular2-toastr/index');
var SignupComponent = (function () {
    function SignupComponent(dataService, creatorService, hashService, appRouter, localStorage, validator, notifier) {
        var _this = this;
        this.dataService = dataService;
        this.creatorService = creatorService;
        this.hashService = hashService;
        this.appRouter = appRouter;
        this.localStorage = localStorage;
        this.validator = validator;
        this.notifier = notifier;
        this.dataService.getUsers().subscribe(function (users) { _this.users = users; });
    }
    SignupComponent.prototype.registerUser = function () {
        var _this = this;
        this.newUser = this.creatorService.createUser();
        this.newUser.firstname = this.firstname;
        this.newUser.lastname = this.lastname;
        this.newUser.username = this.username;
        this.newUser.email = this.email;
        if (this.validator.stringNotInRange(this.username, 3, 13)) {
            this.notifier.error('Грешка!', 'Потребителското име трябва да е между 3 и 13 символа!', false, 3000);
            return;
        }
        if (this.validator.stringNotInRange(this.password, 6, 36)) {
            this.notifier.error('Грешка!', 'Паролата трябва да е между 6 и 36 символа!', false, 3000);
            this.password = '';
            this.passwordConfirm = '';
            return;
        }
        if (this.password.length !== this.passwordConfirm.length) {
            this.notifier.error('Грешка', 'Паролите не съвпадат!', true, 2000);
            return;
        }
        else {
            this.newUser.password = this.hashService.generateHash(this.password);
            this.dataService.addUser(this.newUser).subscribe(function (newUser) {
                _this.users.push(newUser);
                console.log(_this.newUser + 'registered!');
                localStorage.clear();
                localStorage.setItem('username', _this.newUser.username);
                localStorage.setItem('password', _this.newUser.password);
                localStorage.setItem('isLogged', 'true');
                _this.firstname = '';
                _this.lastname = '';
                _this.username = '';
                _this.password = '';
                _this.passwordConfirm = '';
                _this.email = '';
                _this.dataService.getUsers().subscribe(function (users) { _this.users = users; });
                _this.appRouter.navigateByUrl('home');
                _this.notifier.info('Добре дошли!', ' ', false, 1500);
            });
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-up',
            styleUrls: ['./sign-up.component.css'],
            templateUrl: './sign-up.component.html',
            providers: [index_js_1.LocalStorageService, hashing_service_1.HashingService, creator_service_1.CreatorService, validator_service_1.ValidatorService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, creator_service_1.CreatorService, hashing_service_1.HashingService, router_1.Router, index_js_1.LocalStorageService, validator_service_1.ValidatorService, index_1.ToasterService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=sign-up.component.js.map