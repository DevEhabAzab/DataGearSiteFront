import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomethreeAboutService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url = `${this.API_URL}/home-demo-three-about-us?populate=*`;
        return this.http.get(url);
    }

}