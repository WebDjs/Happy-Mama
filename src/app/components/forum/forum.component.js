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
var index_js_1 = require('../../local-storage/index.js');
var router_1 = require('@angular/router');
var ForumComponent = (function () {
    function ForumComponent(router, dataService, storageService) {
        var _this = this;
        this.router = router;
        this.dataService = dataService;
        this.posts = [{
                title: 'hfsjhgsdkjf',
                postContent: 'hgdivmifduchriuiodruh',
                user: 'Hasan',
                date: 'Ivan',
                _isDeleted: false,
                comments: [],
                _id: ''
            }];
        this.isvisible = true;
        this.dataService.getForumPosts().subscribe(function (posts) { _this.posts = posts; });
        this.forumPost = {
            title: '',
            postContent: '',
            user: localStorage.getItem('username'),
            date: '',
            _isDeleted: false,
            comments: [],
            _id: ''
        };
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    ForumComponent.prototype.isUsable = function () {
        return localStorage.getItem('isLogged') === 'true';
    };
    ForumComponent.prototype.clicked = function () {
        this.isvisible = !this.isvisible;
    };
    ForumComponent.prototype.getPost = function (post) {
        localStorage.setItem('postToComment', JSON.stringify(post));
        this.router.navigateByUrl('/comments');
    };
    ForumComponent.prototype.removePost = function (post) {
        var _this = this;
        post._isDeleted = true;
        var index = this.posts.findIndex(function (localPost) { return localPost._isDeleted === true; });
        this.dataService.modifyForumPost(post).subscribe(function (ok) { return _this.posts.splice(index, 1); });
    };
    ForumComponent.prototype.addForumPost = function () {
        var _this = this;
        var newPost = {
            title: this.forumPost.title,
            postContent: this.forumPost.postContent,
            user: this.forumPost.user,
            date: new Date().toLocaleTimeString(),
            _isDeleted: false,
            comments: this.forumPost.comments
        };
        console.log('addingPost');
        console.log(JSON.stringify(newPost));
        this.dataService.addForumPost(newPost).subscribe(function (post) {
            _this.posts.push(post);
            _this.title = '';
            _this.postContent = '';
            _this.user = '';
            _this.date = new Date().toLocaleTimeString();
            _this._isDeleted = false;
            _this.dataService.getForumPosts().subscribe(function (posts) { _this.posts = posts; });
        });
    };
    ForumComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'forum',
            styleUrls: ['./forum.component.css'],
            templateUrl: './forum.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService, index_js_1.LocalStorageService])
    ], ForumComponent);
    return ForumComponent;
}());
exports.ForumComponent = ForumComponent;
//# sourceMappingURL=forum.component.js.map