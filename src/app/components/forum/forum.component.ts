import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'forum',
  styleUrls: ['./forum.component.css'],
  templateUrl: './forum.component.html'
})
export class ForumComponent implements OnInit {

  forumPost: any;
  posts: any[];
  title: string;
  postContent: string;
  user: string;
  date: string;

  constructor(private dataService: DataService) {
    this.dataService.getForumPosts().subscribe(posts => { this.posts = posts; });
    this.forumPost = {
      title: '',
      postContent: '',
      user: 'Ivan',
      date: ''
    };
  }

  ngOnInit() {

  }

  get spy(){
    return JSON.stringify(this.forumPost);
  }

  isvisible: boolean = true;
  clicked() {
    this.isvisible = !this.isvisible;
  }

  addForumPost(): void {
    let newPost = {
      title: this.forumPost.title,
      postContent: this.forumPost.postContent,
      user: this.forumPost.user,
      date: new Date().toLocaleTimeString(),
    };
    console.log('addingPost');
    console.log(JSON.stringify(newPost));

    this.dataService.addForumPost(newPost).subscribe(post => {
      this.posts.push(post);
      this.title = '';
      this.postContent = '';
      this.user = 'Hasan';
      this.date = new Date().toLocaleTimeString();
      this.dataService.getForumPosts().subscribe(posts => { this.posts = posts; });
    });
  }
}
