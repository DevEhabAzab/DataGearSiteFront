import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
import { Partner } from './partner.interfaces';

@Injectable({
    providedIn: 'root'
})
export class PartnerService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url = 'assets/partners-content.json'//`${this.API_URL}/partner?populate=items.image`;
        return this.http.get<{partners:Partner[]}>(url);
    }
    


}