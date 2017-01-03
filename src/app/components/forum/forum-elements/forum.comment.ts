import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'forum-comment',
  styleUrls: ['./forum.comment.css'],
  templateUrl: './forum.comment.html'
})
export class ForumComment {

  @Input() commentData = {
    title: '',
    postContent: '',
    user: '',
    date: '',
  };

  @Output() deleteComment = new EventEmitter();

  deleteCommentNow() {
    this.deleteComment.next();
  }

  isUsable(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }
}
