import { ForumComment } from './forum.comment.model';

export class ForumPost {
  title: string;
  postContent: string;
  user: string;
  date: string;
  comments: ForumComment [];
}
