import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { BlogService } from './blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

	public blogData: any;
    error: any;
    public slug: any;
    constructor(
        private route: ActivatedRoute,
        public router: Router,
		private content: BlogService
    ) {
		// this.content.getData().subscribe((blogData: any) => {
        //     this.blogData = blogData.data;
        // });
    }

    async ngOnInit() {
        try {
            this.slug =this.route.snapshot.paramMap.get('slug')!;
          // Fetch initial data
          this.blogData = await this.content.getDataBySlugAsync(this.slug);
          console.log("data ",this.blogData)
        } catch (error) {
          this.error = error;
          console.error('Error in component', error);
        }
      }

}