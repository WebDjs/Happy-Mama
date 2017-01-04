import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { LocalStorageService } from '../../../local-storage/index.js';
import { ForumPost } from './../../../models/forum.post.model';
import { ForumComment } from './../../../models/forum.comment.model';


@Component({
  moduleId: module.id,
  selector: 'forum-comments-component',
  styleUrls: ['./forum-comments.component.css'],
  templateUrl: './forum-comments.component.html'
})

export class ForumCommentsComponent implements OnInit {

  forumPost: ForumPost;
  postComment: ForumComment;
  comments: ForumComment[];

  ngOnInit() {

  }

  constructor(private dataService: DataService, storageService: LocalStorageService) {

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

    let postId = localStorage.getItem('postToComment');
    this.dataService.getForumPost(postId).subscribe(post => { this.forumPost = post;
      this.forumPost.comments.forEach(c => this.comments.push(c)); } );
    this.postComment = {
      commentContent: '',
      user: '',
      date: ''
   };
  }

  isUsable(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }

  isvisible: boolean = true;
  clicked() {
    this.isvisible = !this.isvisible;
  }

  addComment() {
    let newComment = {
      commentContent: this.postComment.commentContent,
      user: localStorage.getItem('username'),
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      _id: this.forumPost._id
    };

    this.dataService.modifyForumPost(newComment).subscribe((ok) => this.comments.push(newComment));
  }

  removeComment(comment: any) {
    let commentToRemove = {
      commentContent: comment.commentContent,
      _id: this.forumPost._id,
      _Deleted: true
    };
    this.dataService.modifyForumPost(commentToRemove).subscribe((ok) => {
      let index = this.comments.findIndex(
      localComment => localComment.date === comment.date &&
      localComment.user === comment.user);
      this.comments.splice(index, 1);
    });
  }
}
