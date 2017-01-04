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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    // users
    DataService.prototype.getUsers = function () {
        return this.http.get('/users').map(function (res) { return (res.json()); });
    };
    DataService.prototype.addUser = function (user) {
        return this.http.post('/users', JSON.stringify(user), this.options);
    };
    // babysitters
    DataService.prototype.getBabysitters = function () {
        return this.http.get('/babysitters').map(function (res) { return (res.json()); });
    };
    DataService.prototype.addBabysitter = function (babysitter) {
        return this.http.post('/babysitters', JSON.stringify(babysitter), this.options);
    };
    DataService.prototype.editBabysitter = function (babysitter) {
        return this.http.put("/babysitters/" + babysitter._id, JSON.stringify(babysitter), this.options);
    };
    // deleteTask(babysitter: any): Observable<any> {
    //   return this.http.delete(`/babysitters/${babysitter._id}`, this.options);
    // }
    // forumposts
    DataService.prototype.getForumPosts = function () {
        return this.http.get('/forumposts').map(function (res) { return (res.json()); });
    };
    DataService.prototype.getForumPost = function (forumpostId) {
        return this.http.get("/forumposts/" + forumpostId).map(function (res) { return (res.json()); });
    };
    DataService.prototype.addForumPost = function (forumpost) {
        return this.http.post('/forumposts', JSON.stringify(forumpost), this.options);
    };
    DataService.prototype.modifyForumPost = function (forumpost) {
        return this.http.put("/forumposts/" + forumpost._id, JSON.stringify(forumpost), this.options);
    };
    // listings
    DataService.prototype.getListings = function () {
        return this.http.get('/listings').map(function (res) { return (res.json()); });
    };
    DataService.prototype.addListingItem = function (listingItem) {
        return this.http.post('/listings', JSON.stringify(listingItem), this.options);
    };
    DataService.prototype.deleteListingItem = function (listingItem) {
        return this.http.put("/listings/" + listingItem._id, JSON.stringify(listingItem), this.options);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map