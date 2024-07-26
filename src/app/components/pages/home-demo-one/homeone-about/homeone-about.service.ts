import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeoneAboutService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url = `${this.API_URL}/home-demo-one-about-us?populate=*`;
        return this.http.get(url);
    }
    getPartnersData(){
        let url = `${this.API_URL}/home-demo-one-about-us?populate=partners.image`;
        return this.http.get(url);
    }

}