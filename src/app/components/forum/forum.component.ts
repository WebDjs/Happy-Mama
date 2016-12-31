import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ForumPost } from './forum-elements/forum.post';

@Component({
  moduleId: module.id,
  selector: 'forum',
  styleUrls: ['./forum.component.css'],
  templateUrl: './forum.component.html'
})
export class ForumComponent {
  posts: any[];
  constructor(private dataService: DataService) {
    this.posts = [{
      title: 'Гледачка! Спешноооо!',
      content: 'Търся млада хубава жена да поема малкия от време на време,' +
      ' той малкия е малко палав нали и сутрин се буди рано, и вечер късно също нещо е непослушен,' +
      ' ама те са такива тия малките такова... нали',
      username: 'Али Реза',
      date: '32.12.2027г.'
    },
    {
      title: 'Гледачкатъъъъ! Неуспешноооо!',
      content: 'Търся дърта грозна кучка да плаши децата от време на време,' +
      ' да може да лети на метла, прахосмукачка, парочистачка и други лични превозни средства,' +
      ' за  да избягва трафика като ги води и прибира от училище.',
      username: 'Бай Колю Убавеца',
      date: '32.12.2027г.'
    }];
  }
}
