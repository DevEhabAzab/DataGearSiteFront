import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';


export interface Feature{
subTitle:string;
title:string;
Items:FeatureItem[];

}
export interface FeatureItem {
    icon: string;
    title: string;
    paragraph: string;
  }
@Injectable({
    providedIn: 'root'
})
export class FeaturesService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url =  '/assets/data/fietures_data.json';
        return this.http.get<Feature>(url);
        // let url = `${this.API_URL}/feature?populate=*`;
        // return this.http.get(url);
    }

}