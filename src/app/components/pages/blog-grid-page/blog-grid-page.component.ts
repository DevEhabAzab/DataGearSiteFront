import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../common/blog/blog.service';

@Component({
    selector: 'app-blog-grid-page',
    templateUrl: './blog-grid-page.component.html',
    styleUrls: ['./blog-grid-page.component.scss']
})
export class BlogGridPageComponent implements OnInit {

    public blogData: any;
    error: any;
    isLoading: boolean = false;

    constructor(
		private content: BlogService
    ) {
		// this.content.getData().subscribe((blogData: any) => {
        //     this.blogData = blogData.data;
        //     console.log(this.blogData)
        // });

    }
async ngOnInit() {
  this.isLoading=true;
    try {
      // Fetch initial data
      this.blogData = await this.content.getBlogsGridDataAsync();
      this.isLoading=false;
      console.log("data ",this.blogData)
    } catch (error) {
      this.error = error;
      this.isLoading=false;
      console.error('Error in component', error);
    }
  }
    // ngOnInit(): void {}

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}