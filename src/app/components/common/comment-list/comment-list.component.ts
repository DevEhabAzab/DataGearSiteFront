import { Component, Input } from '@angular/core';
import { Comment } from '../comment/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {
  @Input()
comments!:Comment[]
}
