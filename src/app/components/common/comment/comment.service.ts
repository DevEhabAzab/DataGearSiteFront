import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
export interface Comment {
  id: number;
  creatorName: string;
  creationDate?: Date;
  content: string;
  replies: Comment[];
  
}
export interface commentFormDto {
  name: string;
  email: string;
  comment: string;
  blogId:number;
  replyTo:(number|null);
}
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private API_URL= environment.API_URL;
private FullUrl= `${this.API_URL}/services?populate=*&sort[0]=id%3Adesc`;
    constructor(
        private http : HttpClient
    ) {}
    private commentToReplyId = new BehaviorSubject<number| null>(null);
    currentCommentReplyId = this.commentToReplyId.asObservable();
  
    changetCommentReplyIdData(commentId: number) {
      this.commentToReplyId.next(commentId);
    }
    getData(blogId:number):Observable<Comment[]>{
        let url = `${this.API_URL}/Comment/GetAllBlogComments?blogId=${blogId}`;
        return this.http.get<Comment[]>(url);
    }
    addComment(comment:commentFormDto): Observable<any> {
      let url = `${this.API_URL}/Comment/AddComment`;
      return this.http.post(url, comment);

  }
}
