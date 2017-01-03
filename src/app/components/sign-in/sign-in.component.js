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
var hashing_service_1 = require('../../services/hashing.service');
var index_js_1 = require('../../local-storage/index.js');
var index_1 = require('angular2-toastr/index');
var SigninComponent = (function () {
    function SigninComponent(dataService, hashService, localStorage, notifier, appRouter) {
        var _this = this;
        this.dataService = dataService;
        this.hashService = hashService;
        this.localStorage = localStorage;
        this.notifier = notifier;
        this.appRouter = appRouter;
        this.dataService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    }
    SigninComponent.prototype.loginUser = function () {
        var _this = this;
        this.newUser = new user_model_1.User();
        this.newUser.username = this.username;
        this.newUser.password = this.hashService.generateHash(this.password);
        if (!(this.users.find(function (usr) {
            return (usr.username === _this.newUser.username) &&
                (usr.password === _this.newUser.password);
        }))) {
            this.notifier.error('Грешка', 'Потребителското име или паролата не са правилни!', false, 3000);
            this.password = '';
            return;
        }
        ;
        localStorage.clear();
        localStorage.setItem('username', this.newUser.username);
        localStorage.setItem('password', this.newUser.password);
        localStorage.setItem('isLogged', 'true');
        this.appRouter.navigateByUrl('/');
        this.notifier.info('Добре дошли!', ' ', false, 1500);
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-in',
            styleUrls: ['./sign-in.component.css'],
            templateUrl: './sign-in.component.html',
            providers: [index_js_1.LocalStorageService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, hashing_service_1.HashingService, index_js_1.LocalStorageService, index_1.ToasterService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=sign-in.component.js.map