import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ForumPost } from '../../models/forum.post.model';
import { ForumComment } from '../../models/forum.comment.model';
import { LocalStorageService } from '../../local-storage/index.js';

@Component({
  moduleId: module.id,
  selector: 'forum',
  styleUrls: ['./forum.component.css'],
  templateUrl: './forum.component.html'
})
export class ForumComponent implements OnInit {

  forumPost: ForumPost;
  posts: ForumPost[];
  title: string;
  postContent: string;
  user: string;
  date: string;
  _isDeleted: boolean;
  comments: ForumComment[];

  constructor(private dataService: DataService, storageService: LocalStorageService) {
    this.dataService.getForumPosts().subscribe(posts => { this.posts = posts; });
    this.forumPost = {
      title: '',
      postContent: '',
      user: 'Ivan',
      date: '',
      _isDeleted: false,
      comments: []
    };
  }

  ngOnInit() {

  }

  isvisible: boolean = true;
  clicked() {
    this.isvisible = !this.isvisible;
  }

  isCommentMode: boolean = false;

  commentPost(post: any): void {
    if (!this.isCommentMode) {
      this.isCommentMode = !this.isCommentMode;
    }
    let currentPost = post;
    this.posts = [];
    this.posts.push(post);
  }

  removePost(post: any): void {
    post._isDeleted = true;
    let index = this.posts.findIndex(localPost => localPost._isDeleted === true);
    this.dataService.deleteForumPost(post).subscribe((ok) => {console.log(ok); });
    this.posts.splice(index, 1);
  }

  addForumPost(): void {
    let newPost = {
      title: this.forumPost.title,
      postContent: this.forumPost.postContent,
      user: this.forumPost.user,
      date: new Date().toLocaleTimeString(),
      _isDeleted: false,
      comments: this.forumPost.comments
    };
    console.log('addingPost');
    console.log(JSON.stringify(newPost));

    this.dataService.addForumPost(newPost).subscribe(post => {
      this.posts.push(post);
      this.title = '';
      this.postContent = '';
      this.user = 'Hasan';
      this.date = new Date().toLocaleTimeString();
      this._isDeleted = false;
      this.dataService.getForumPosts().subscribe(posts => { this.posts = posts; });
    });
  }
}
