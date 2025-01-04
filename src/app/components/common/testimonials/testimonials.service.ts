import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
export interface TestimonialsData {
    backgroundImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    subTitle: string;
    title: string;
    slides: TestimonialSlide[];
  }
  
  interface TestimonialSlide {
    desc: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    name: string;
    designation: string;
  }

@Injectable({
    providedIn: 'root'
})
export class TestimonialsService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        console.log("get test imotionals")
        let url =  '/assets/data/test-imonials.json';
        return this.http.get<TestimonialsData>(url);
        //let url = `${this.API_URL}/testimonial?populate=*`;
        //return this.http.get(url);
    }
    // getSlideData(){
    //     let url = `${this.API_URL}/testimonial?populate=slides.image`;
    //     return this.http.get(url);
    // }

}