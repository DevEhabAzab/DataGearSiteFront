import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';

@Component({
    selector: 'app-blog-widget',
    templateUrl: './blog-widget.component.html',
    styleUrls: ['./blog-widget.component.scss']
})
export class BlogWidgetComponent implements OnInit {

	public blogData: any;

    constructor(
		private content: BlogService
    ) {
		this.content.getData().subscribe((blogData: any) => {
            this.blogData = blogData.data;
        });
    }

    ngOnInit(): void {}

}