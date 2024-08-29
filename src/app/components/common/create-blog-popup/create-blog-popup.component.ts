import { Component, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-blog-popup',
  templateUrl: './create-blog-popup.component.html',
  styleUrl: './create-blog-popup.component.scss'
})
export class CreateBlogPopupComponent {

  @Output() close = new EventEmitter<void>();
  slug: string = '';
  title: string = '';
  imagePreview: string | ArrayBuffer | null = null;

  /**
   *
   */
  constructor(
    private content: BlogService,
    private router: Router
  ) {

  }

  closePopup() {
    this.close.emit();
  }
  onSubmit() {
    this.content.create({ "slug": this.slug, "title": this.title, "UserId": "60ca91f0-6360-4862-b3da-a327442de88a", "Content": "", "Publisher": "" }).subscribe((result: any) => {
      alert(`Name: ${this.slug}, Email: ${this.title} slug name in server is ${result}`);
      this.closePopup();
      this.router.navigate(['/blog/create',result]);
    },(err)=>{
      alert("cannot craete blog ")
    });

  }

}
