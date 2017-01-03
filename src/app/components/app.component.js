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
var data_service_1 = require('./../services/data.service');
var creator_service_1 = require('./../services/creator.service');
var index_1 = require('./../local-storage/index');
var index_2 = require('angular2-toastr/index');
var nav_model_1 = require('../models/nav.model');
var AppComponent = (function () {
    function AppComponent(dataService, creatorService, localStorage, notifier, appRouter) {
        this.dataService = dataService;
        this.creatorService = creatorService;
        this.localStorage = localStorage;
        this.notifier = notifier;
        this.appRouter = appRouter;
        this.isUserLogged = false;
        this.isLanguageEnglish = false;
        this.language = 'EN';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.nav = new nav_model_1.Nav();
        this.nav.logo = 'Dетегледачките';
        this.nav.signIn = 'Вход';
        this.nav.signOut = 'Изход';
        this.nav.signUp = 'Регистрация';
        this.nav.home = false;
        this.nav.babisitters = 'Dетегледачки';
        this.nav.listungs = 'Обяви';
        this.nav.forum = 'Форум';
        this.nav.info = 'Полезна информация';
        this.nav.fun = 'Забавно';
        this.nav.search = 'Търсене...';
    };
    AppComponent.prototype.getNav = function () {
        return this.nav;
    };
    AppComponent.prototype.getUserName = function () {
        this.userName = localStorage.getItem('username');
        if (this.userName) {
            return this.userName;
        }
        return 'Username';
    };
    AppComponent.prototype.isLogged = function () {
        var isLoggedAsString = localStorage.getItem('isLogged');
        if (isLoggedAsString) {
            this.isUserLogged = true;
        }
        else {
            this.isUserLogged = false;
        }
        return this.isUserLogged;
    };
    AppComponent.prototype.getHome = function () {
        return this.nav.home;
    };
    AppComponent.prototype.changeLanguage = function () {
        this.isLanguageEnglish = !this.isLanguageEnglish;
        if (this.isLanguageEnglish) {
            this.language = 'BG';
            this.nav.logo = 'TheBabysitters';
            this.nav.signIn = 'SignIn';
            this.nav.signOut = 'SignOut';
            this.nav.signUp = 'SignUp';
            this.nav.home = true;
            this.nav.babisitters = 'Babysitters';
            this.nav.listungs = 'Listings';
            this.nav.forum = 'Forum';
            this.nav.info = 'Info';
            this.nav.fun = 'Fun';
            this.nav.search = 'Search...';
        }
        else {
            this.language = 'EN';
            this.nav = new nav_model_1.Nav();
            this.nav.logo = 'Dетегледачките';
            this.nav.signIn = 'Вход';
            this.nav.signOut = 'Изход';
            this.nav.signUp = 'Регистрация';
            this.nav.home = false;
            this.nav.babisitters = 'Dетегледачки';
            this.nav.listungs = 'Обяви';
            this.nav.forum = 'Форум';
            this.nav.info = 'Полезна информация';
            this.nav.fun = 'Забавно';
            this.nav.search = 'Търсене...';
        }
    };
    AppComponent.prototype.logOut = function () {
        localStorage.clear();
        this.notifier.warning('Довиждане!', 'Заповядайте пак!', false, 1500);
        this.appRouter.navigateByUrl('/');
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            styleUrls: ['./app.component.css'],
            templateUrl: './app.component.html',
            providers: [data_service_1.DataService, creator_service_1.CreatorService, index_1.LocalStorageService, index_2.ToasterService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, creator_service_1.CreatorService, index_1.LocalStorageService, index_2.ToasterService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map