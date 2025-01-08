import { Component, Input, OnInit, input } from '@angular/core';
import { Comment, CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit {
@Input()
comment!:Comment;
avatarImage!:string
/**
 *
 */
constructor(
  private content:CommentService

) {
  console.log("comment length ",this.comment)

}
  ngOnInit(): void {
    console.log("comment length 222"+this.comment.replies,this.comment)

    console.log("comment length 222"+ this.comment.replies!=null && this.comment.replies.length,this.comment)
    console.log("comment length 222"+this.comment.replies && this.comment.replies.length,this.comment)

    this.avatarImage = this.generateAvatarImage(this.comment.creatorName);

  }
// Generate avatar as a base64 image
generateAvatarImage(name: string): string {
  const initials = this.getInitials(name);
  const backgroundColor = this.getRandomColor();

  // Create a canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  canvas.width = 100;
  canvas.height = 100;

  // Draw background color
  ctx!.fillStyle = backgroundColor;
  ctx!.fillRect(0, 0, canvas.width, canvas.height);

  // Draw initials text in the center
  ctx!.fillStyle = '#ffffff';
  ctx!.font = '40px Arial';
  ctx!.textAlign = 'center';
  ctx!.textBaseline = 'middle';
  ctx!.fillText(initials, canvas.width / 2, canvas.height / 2);

  // Return base64 image data
  return canvas.toDataURL('image/jpeg');
}

// Get the initials from the name
getInitials(name: string): string {
  const nameParts = name.split(' ');
  const firstInitial = nameParts[0].charAt(0).toUpperCase();
  const lastInitial = nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase() : '';
  return `${firstInitial} ${lastInitial}`;
}

// Get a random color for the background
getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
onReply(commentid:number){
this.content.changetCommentReplyIdData(commentid);
}

handleChange(event: Event, commentid: number): void {
  event.preventDefault(); // Prevent the default anchor behavior
  console.log('Anchor clicked with data:', commentid);
  this.content.changetCommentReplyIdData(commentid);

  // Your custom logic using the passed data
}
}
