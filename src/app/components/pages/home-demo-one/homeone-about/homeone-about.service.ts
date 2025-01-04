import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../src/environments/environment';
import { AboutData } from './home-about.interfaces';
import { Partner } from 'src/app/components/common/partner/partner.interfaces';

@Injectable({
    providedIn: 'root'
})
export class HomeoneAboutService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url = 'assets/data/about-content.json';
        return this.http.get<{ aboutData: AboutData }>(
           url 
          );
    }
    getPartnersData(){
        let url = `assets/data/partners-content.json`;
        return this.http.get<{partners:Partner[]}>(url);
    }
    getContent(){
        let url = 'assets/data/about-content.json';
        return this.http.get<{ aboutData: AboutData }>(
           url 
          );
    }
}