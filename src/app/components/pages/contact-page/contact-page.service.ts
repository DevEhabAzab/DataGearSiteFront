import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
import { Observable } from 'rxjs';

export interface ContactFormDto {
  name: string;
  email: string;
  subject: string;
  phoneNumber: string;
  message: string;
  acceptTerms: boolean;
}
export interface ContactInfoData {
    title: string;
    paragraph: string;
    location: string;
    phoneNumber: string;
    email: string;
    officeHours: string;
    officeOffday: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  }

@Injectable({
    providedIn: 'root'
})
export class ContactPageService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){

        let url =  '/assets/data/contact-page.json';
        return this.http.get<ContactInfoData>(url);

        // let url = `${this.API_URL}/contact-us?populate=*`;
        // return this.http.get(url);
    }
    sendContactForm(data: ContactFormDto): Observable<any> {
        let url = `${this.API_URL}/ContactUs/AskQuestion`;
        return this.http.post(url, data);
      }

}