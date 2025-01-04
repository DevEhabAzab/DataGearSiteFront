import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
export interface FAQ {
    image: {
        data: {
            attributes: {
                url: string;
            };
        };
    };
    subTitle: string;
    title: string;
    paragraph: string;
    items: FAQItem[];
}

interface FAQItem {
    id: number;
    title: string;
    desc: string;
}
@Injectable({
    providedIn: 'root'
})
export class FaqService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){

        let url =  '/assets/data/faq.json';
        return this.http.get<FAQ>(url);

        // let url = `${this.API_URL}/faq?populate=*`;
        // return this.http.get(url);
    }

}