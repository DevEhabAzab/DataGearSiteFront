import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TestimonialsService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url = `${this.API_URL}/testimonial?populate=*`;
        return this.http.get(url);
    }
    getSlideData(){
        let url = `${this.API_URL}/testimonial?populate=slides.image`;
        return this.http.get(url);
    }

}