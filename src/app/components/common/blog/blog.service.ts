import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    private API_URL= environment.API_URL;
    private Media_Base_URL= environment.Media_Base_URL;
    static instance: BlogService;


    constructor(
        private http : HttpClient
    ) {
      BlogService.instance = this;


    }

    // getData(){
    //     let url = `${this.API_URL}/blogs?populate=*&sort[0]=id%3Adesc`;
    //     return this.http.get(url);
    // }
    async getDataAsync(): Promise<any> {
        try {
            let url = `${this.API_URL}/Blog/GetAllBlogs`;
          const response = await this.http.get<any>(url).toPromise();
          return response;
        } catch (error) {
          console.error('Error fetching data', error);
          throw error;
        }
      }
      async getBlogsGridDataAsync(): Promise<any> {
        try {
            let url = `${this.API_URL}/Blog/GetAllBlogsForGrid`;
          const response = await this.http.get<any>(url).toPromise();
          return response;
        } catch (error) {
          console.error('Error fetching data', error);
          throw error;
        }
      }
    getData(){
        let url = `${this.API_URL}/Blog/GetAllBlogs`;
        return this.http.get(url);
    }
    getDataBySlug(slug:string){
        let url = `${this.API_URL}/Blog/GetWithSlug/${slug}`;
        return this.http.get(url);
    }
    async getDataBySlugAsync(slug:string): Promise<any> {
        try {
            let url = `${this.API_URL}/Blog/GetWithSlug/${slug}`;
          const response = await this.http.get<any>(url).toPromise();
          return response;
        } catch (error) {
          console.error('Error fetching data', error);
          throw error;
        }
      }
    create(blog:any){
        let url = `${this.API_URL}/Blog/CreateBlog`;
        return this.http.post(url,blog);
    }
    // async update(blog:any):Observable<{ data: any }>{
    //     let url = `${this.API_URL}/Blog/UpdateBlog`;
    //     return await this.http.put(url,blog);
    // }

    async updateDataAsync( data: any): Promise<any> {
        try {
          const response = await this.http.put<any>(`${this.API_URL}/Blog/UpdateBlog`, data).toPromise();
          return response;
        } catch (error) {
          console.error('Error updating data', error);
          throw error;
        }
      }

    getCategories(){

        let url = `${this.API_URL}/Category/GetAllCategories`;
        return this.http.get(url);
    
    }
    async uploadFileToBlog(slug: string, file: File): Promise<any> {
      try {
        const formData = new FormData();
        formData.append('file', file, file.name);
        const url = `${this.API_URL}/Blog/UploadFile/${slug}`;
        
        const response = await this.http.post<{ content: string }>(url, formData).toPromise();
        console.log('Raw response:', response);
        let modifiedResponse = { fileUrl: '' };

    // Parse the content to extract fileUrl
    if (response && response.content) {
      const parsedContent = JSON.parse(response.content);
      console.log("parsed content",parsedContent)
      modifiedResponse.fileUrl = `${this.API_URL.replace('/api','/').concat(parsedContent)}`;
    } else {
      console.warn('Content not found or invalid in response:', response);
    }

    return modifiedResponse;
      } catch (error) {
        console.error('Error updating data', error);
        throw error;
      }
    }
    // async uploadFileToBlog(slug:string,file:File) :Promise<any> {
    //     try {
    //       const formData = new FormData();
    //       formData.append('file', file, file.name);
    //       let url = `${this.API_URL}/Blog/UploadFile/${slug}`;
    //       const response = await this.http.post<{ fileUrl: string }>(url, formData).toPromise();
    //       return response;
    //     } catch (error) {
    //       console.error('Error updating data', error);
    //       throw error;
    //     }
    // }
    getMediaUrl(mediaPath: string): string {
        let result = mediaPath.replace(/^"|"$/g, '');
        return `${this.Media_Base_URL}/`+result;
      }
  

}