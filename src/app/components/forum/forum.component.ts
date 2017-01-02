import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ForumPost } from '../../models/forum.post.model';
import { ForumComment } from '../../models/forum.comment.model';
import { LocalStorageService } from '../../local-storage/index.js';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'forum',
  styleUrls: ['./forum.component.css'],
  templateUrl: './forum.component.html'
})
export class ForumComponent implements OnInit {

  forumPost: ForumPost;
  posts: ForumPost[] = [{
    title: 'hfsjhgsdkjf',
    postContent: 'hgdivmifduchriuiodruh',
    user: 'Hasan',
    date: 'Ivan',
    _isDeleted: false,
    comments: [],
    _id: ''
  }];
  title: string;
  postContent: string;
  user: string;
  date: string;
  _isDeleted: boolean;
  comments: ForumComment[];
  _id: string;

  constructor(private router: Router, private dataService: DataService, storageService: LocalStorageService) {
    this.dataService.getForumPosts().subscribe(posts => { this.posts = posts; });
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

  ngOnInit() {

  }

  isUsable(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }

  isvisible: boolean = true;
  clicked() {
    this.isvisible = !this.isvisible;
  }

  getPost(post: any): void {
    localStorage.setItem('postToComment', JSON.stringify(post));
    this.router.navigateByUrl('/comments');
  }

  removePost(post: any): void {
    post._isDeleted = true;
    let index = this.posts.findIndex(localPost => localPost._isDeleted === true);
    this.dataService.modifyForumPost(post).subscribe((ok) => this.posts.splice(index, 1));
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
      this.user = '';
      this.date = new Date().toLocaleTimeString();
      this._isDeleted = false;
      this.dataService.getForumPosts().subscribe(posts => { this.posts = posts; });
    });
  }
}
