import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../src/environments/environment';
import { BannerData ,BannerListsData} from './homeone-banner.interfaces';

@Injectable({
    providedIn: 'root'
})
export class HomeoneBannerService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url = `${this.API_URL}/home-demo-one-banner?populate=homeSlides.backgroundImage`;
        return this.http.get(url);
    }
    getListsData(){
        let url = `${this.API_URL}/home-demo-one-banner?populate=lists`;
        return this.http.get(url);
    }
    getContent(){
        let url =  'assets/data/homeone-banner.json';
        return this.http.get<{ bannerData: BannerData; bannerListsData: BannerListsData }>(url);
    }


}