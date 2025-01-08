import { Component, Input, OnInit } from '@angular/core';
import { CommentService,Comment ,commentFormDto} from '../comment/comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent  implements OnInit{

  commentForm!: FormGroup;
  formData: commentFormDto= {
    name: '',
    email: '',
    comment: '',
    blogId: 0, // or any default value
    replyTo:null
  }
  replayTo:number|null=null
ngOnInit(): void {
  console.log("comments blogid",this.blogId)

  this.content.getData(this.blogId).subscribe((commentsData: Comment[]) => {
    this.comments=commentsData;
    console.log("comments ",this.comments)
    this.commentLength=commentsData.length;
});
  
this.content.currentCommentReplyId.subscribe((newreply) => {
  this.replayTo = newreply;
  console.log(this.replayTo)
});

}
@Input()
blogId!:number
comments!:Comment[]
commentLength!:number
/**
 *
 */
constructor(
private content:CommentService,
private fb: FormBuilder
) {
  this.commentForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', Validators.required]
  });
}


onSubmitComment(){
  console.log("form data of comment ,this.commentForm",this.commentForm)
  if (this.commentForm.valid) {
     this.formData = this.commentForm.value;
     this.formData.blogId=this.blogId;
     this.formData.replyTo=this.replayTo;
console.log("FormDaya",this.formData)
    this.content.addComment(this.formData).subscribe(
      response => {
        console.log('Form submitted successfully', response);
        this.content.getData(this.blogId).subscribe((commentsData: Comment[]) => {
          this.comments=commentsData;
          console.log("comments ",this.comments)
          this.commentLength=commentsData.length;
      });
      },
      error => {
        console.error('Error submitting form', error);
      }
    );
  } else {
    console.log('Form is invalid');
  }
}
}
