import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
export interface ExperienceFunFactsItem {
    number: number;
    sign?: boolean;
    title: string;
  }
  
 export  interface ExperienceFunFactsModel {
    backgroundImage: string;
    items: ExperienceFunFactsItem[];
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
  }

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url =  '/assets/data/experiance-data.json';
        return this.http.get<ExperienceFunFactsModel>(url);
        //let url = `${this.API_URL}/experience?populate=*`;
        //return this.http.get(url);
    }

}