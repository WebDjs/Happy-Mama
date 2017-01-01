import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'forum-post',
  styleUrls: ['./forum.post.css'],
  templateUrl: './forum.post.html'
})
export class ForumPost {
  @Input() postData = {
    title: '',
    postContent: '',
    user: '',
    date: ''
  };

  @Output() deletePost = new EventEmitter();

  deleteForumPost() {
    this.deletePost.next();
  }
}
