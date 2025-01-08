import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-blog',
  templateUrl: './init-blog.component.html',
  styleUrl: './init-blog.component.scss'
})


export class InitBlogComponent implements OnInit{
  isCreateBlogPopupVisible:boolean=false;
/**
 *
 */
constructor() {
  
}
  ngOnInit(): void {
this.openCraeteBlogPopUp()

}
  openCraeteBlogPopUp() {
    this.isCreateBlogPopupVisible = true;
  }

  closePopup() {
    this.isCreateBlogPopupVisible = false;
  }

}
