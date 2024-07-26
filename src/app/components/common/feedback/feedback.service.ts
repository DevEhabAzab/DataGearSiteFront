import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url = `${this.API_URL}/feedback?populate=*`;
        return this.http.get(url);
    }
    getSlideData(){
        let url = `${this.API_URL}/feedback?populate=slides.image`;
        return this.http.get(url);
    }

}