import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { LocalStorageService } from '../../../local-storage/index.js';
import { ForumComponent } from './../forum.component';
import { ForumComment } from './../../../models/forum.comment.model';


@Component({
  moduleId: module.id,
  selector: 'forum-comments-component',
  styleUrls: ['./forum-comments.component.css'],
  templateUrl: './forum-comments.component.html'
})

export class ForumCommentsComponent implements OnInit {

  forumPost: ForumComponent;
  postComment: ForumComment;
  comments: ForumComment[];

  constructor(private dataService: DataService, storageService: LocalStorageService) {

    this.forumPost = JSON.parse(localStorage.getItem('postToComment'));
    localStorage.setItem('postToComment', null);
    this.comments = this.forumPost.comments;
    this.postComment = {
      commentContent: '',
      user: '',
      date: ''
    };
  }

  ngOnInit() {

  }

  isUsable(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }

  isvisible: boolean = true;
  clicked() {
    this.isvisible = !this.isvisible;
  }

  removeComment(comment: any): void {
    let index = this.forumPost.comments.findIndex(
      localComment => localComment.date === comment.date &&
       localComment.user === comment.user);
    this.forumPost.comments.splice(index, 1);
  }

  addComment() {
    let newComment = {
      commentContent: this.postComment.commentContent,
      user: localStorage.getItem('username'),
      date: new Date().toLocaleTimeString(),
      _id: this.forumPost._id
    };

    this.forumPost.comments.push(newComment);

    this.dataService.modifyForumPost(newComment).subscribe((ok) => console.log('ok'));
    console.log('addingComment');
    console.log(JSON.stringify(newComment));
  }
}
