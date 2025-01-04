import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
import {ServiceDetails} from './services.interfaces'
@Injectable({
    providedIn: 'root'
})
export class ServicesService {

    private API_URL= environment.API_URL;
private FullUrl= `${this.API_URL}/services?populate=*&sort[0]=id%3Adesc`;
    constructor(
        private http : HttpClient
    ) {}

    getData(){
        console.log("get get get get")
        let url =  '/assets/data/services_data.json';
        return this.http.get<ServiceDetails[]>(url);
    }

}