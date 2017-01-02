import { ForumComment } from './forum.comment.model';

export class ForumPost {
  title: string;
  postContent: string;
  user: string;
  date: string;
  _isDeleted: boolean;
  comments: ForumComment [];
}
