import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}


    uploadFileToBlog(slug:string,file:File) : Observable<{ fileUrl: string }> {
        const formData = new FormData();
        formData.append('file', file, file.name);
        let url = `${this.API_URL}/BBlog/UploadImage/${slug}`;

        // Replace with your server URL
        return this.http.post<{ fileUrl: string }>(url, formData);
      
    }
  

}