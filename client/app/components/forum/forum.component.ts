import {Component} from '@angular/core';
import {ForumPost} from './forum-elements';

@Component({
  moduleId: module.id,
  selector: 'forum',
  styleUrls: ['./forum.component.css'],
  templateUrl: './forum.component.html'
})
export class ForumComponent {
  posts = [{
    title: 'Гледачка! Спешноооо!',
    postContent: 'Търся млада хубава жена да поема малкия от време на време,' +
    ' той малкия е малко палав нали и сутрин се буди рано, и вечер късно също нещо е непослушен,' +
    ' ама те са такива тия малките такова... нали',
    user: 'Али Реза',
    date: '32.12.2027г.'
  },
    {
      title: 'Гледачкатъъъъ! Неуспешноооо!',
      postContent: 'Търся дърта грозна кучка да плаши децата от време на време,' +
      ' да може да лети на метла, прахосмукачка, парочистачка и други лични превозни средства,' +
      ' за  да избягва трафика като ги води и прибира от училище.',
      user: 'Бай Колю Убавеца',
      date: '32.12.2027г.'
    }]
}
