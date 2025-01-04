import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';
import { BlogService } from 'src/app/components/common/blog/blog.service';

@Component({
    selector: 'app-blog-details-page',
    templateUrl: './blog-details-page.component.html',
    styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {

    public slug: any;
    public blogDetailsData: any;
    private API_URL= environment.API_URL;
    date=new Date();

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private content: BlogService
    ) {
        this.route.params.subscribe((param : any)=>{
            let url = `${this.API_URL}/Blog/GetWithSlug/${param.slug}`;
            let ddd = this.http.get(url);
            ddd.subscribe(res => {
                this.blogDetailsData = res;
                console.log("blog details ",this.blogDetailsData)
            });
        });
    }

    ngOnInit(): void {}

}