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
var ForumPost = (function () {
    function ForumPost() {
        this.postData = {
            title: '',
            postContent: '',
            user: '',
            date: '',
        };
        this.deletePost = new core_1.EventEmitter();
        this.climbPost = new core_1.EventEmitter();
    }
    ForumPost.prototype.deleteForumPost = function () {
        this.deletePost.next();
    };
    ForumPost.prototype.transferPost = function () {
        console.log('climbing!');
        this.climbPost.next();
    };
    ForumPost.prototype.isUsable = function () {
        return localStorage.getItem('isLogged') === 'true';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ForumPost.prototype, "postData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ForumPost.prototype, "deletePost", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ForumPost.prototype, "climbPost", void 0);
    ForumPost = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'forum-post',
            styleUrls: ['./forum.post.css'],
            templateUrl: './forum.post.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ForumPost);
    return ForumPost;
}());
exports.ForumPost = ForumPost;
//# sourceMappingURL=forum.post.js.map