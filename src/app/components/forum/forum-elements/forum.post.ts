import {Component, Input} from '@angular/core';

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
  }
}
