import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url = `${this.API_URL}/blogs?populate=*&sort[0]=id%3Adesc`;
        return this.http.get(url);
    }
    create(blog:any){
        let url = `${this.API_URL}/Blog/CreateBlog`;
        return this.http.post(url,blog);
    }

}