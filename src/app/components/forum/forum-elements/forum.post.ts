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
    date: '',
  };

  @Output() deletePost = new EventEmitter();
  @Output() climbPost = new EventEmitter();

  deleteForumPost() {
    this.deletePost.next();
  }

  transferPost() {
    console.log('climbing!');
    this.climbPost.next();
  }

  isUsable(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }
}
