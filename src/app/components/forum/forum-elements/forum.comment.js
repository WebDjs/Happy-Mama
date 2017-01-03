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
var ForumComment = (function () {
    function ForumComment() {
        this.commentData = {
            title: '',
            postContent: '',
            user: '',
            date: '',
        };
        this.deleteComment = new core_1.EventEmitter();
    }
    ForumComment.prototype.deleteCommentNow = function () {
        this.deleteComment.next();
    };
    ForumComment.prototype.isUsable = function () {
        return localStorage.getItem('isLogged') === 'true';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ForumComment.prototype, "commentData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ForumComment.prototype, "deleteComment", void 0);
    ForumComment = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'forum-comment',
            styleUrls: ['./forum.comment.css'],
            templateUrl: './forum.comment.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ForumComment);
    return ForumComment;
}());
exports.ForumComment = ForumComment;
//# sourceMappingURL=forum.comment.js.map