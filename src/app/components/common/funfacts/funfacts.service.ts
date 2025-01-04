import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FunfactsService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    // getData(slug:string    ){
    //     let url = `'assets/data/services_data.json'`//`${this.API_URL}/funfact?populate=*`;
    //     return this.http.get<>(url);
    // }

}