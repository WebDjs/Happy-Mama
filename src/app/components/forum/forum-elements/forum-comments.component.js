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
var data_service_1 = require('../../../services/data.service');
var index_js_1 = require('../../../local-storage/index.js');
var ForumCommentsComponent = (function () {
    function ForumCommentsComponent(dataService, storageService) {
        var _this = this;
        this.dataService = dataService;
        this.isvisible = true;
        this.forumPost = {
            title: '',
            postContent: '',
            user: '',
            date: '',
            _isDeleted: false,
            comments: [],
            _id: ''
        };
        this.comments = this.forumPost.comments;
        var postId = localStorage.getItem('postToComment');
        this.dataService.getForumPost(postId).subscribe(function (post) {
            _this.forumPost = post;
            _this.forumPost.comments.forEach(function (c) { return _this.comments.push(c); });
        });
        this.postComment = {
            commentContent: '',
            user: '',
            date: ''
        };
    }
    ForumCommentsComponent.prototype.ngOnInit = function () {
    };
    ForumCommentsComponent.prototype.isUsable = function () {
        return localStorage.getItem('isLogged') === 'true';
    };
    ForumCommentsComponent.prototype.clicked = function () {
        this.isvisible = !this.isvisible;
    };
    ForumCommentsComponent.prototype.addComment = function () {
        var _this = this;
        var newComment = {
            commentContent: this.postComment.commentContent,
            user: localStorage.getItem('username'),
            date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
            _id: this.forumPost._id
        };
        this.dataService.modifyForumPost(newComment).subscribe(function (ok) { return _this.comments.push(newComment); });
    };
    ForumCommentsComponent.prototype.removeComment = function (comment) {
        var _this = this;
        var commentToRemove = {
            commentContent: comment.commentContent,
            _id: this.forumPost._id,
            _Deleted: true
        };
        this.dataService.modifyForumPost(commentToRemove).subscribe(function (ok) {
            var index = _this.comments.findIndex(function (localComment) { return localComment.date === comment.date &&
                localComment.user === comment.user; });
            _this.comments.splice(index, 1);
        });
    };
    ForumCommentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'forum-comments-component',
            styleUrls: ['./forum-comments.component.css'],
            templateUrl: './forum-comments.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, index_js_1.LocalStorageService])
    ], ForumCommentsComponent);
    return ForumCommentsComponent;
}());
exports.ForumCommentsComponent = ForumCommentsComponent;
//# sourceMappingURL=forum-comments.component.js.map