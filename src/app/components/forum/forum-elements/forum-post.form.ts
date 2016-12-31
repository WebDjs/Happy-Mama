import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'forum-form',
  templateUrl: './forum-post.form.html',
  styleUrls: ['./forum-post.form.css'],
})

export class ForumForm{

  forumForm: any;

  constructor(){
    this.forumForm = {
      title: '',
      postedOn: new Date().toLocaleTimeString(),
      author: 'Pesjo',
      content: ''
    };
  }

  get spy(){
    return JSON.stringify(this.forumForm);
  }

  creatPost(){
    
  }
}
