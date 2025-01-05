import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';


export interface Funfact{
    icon: string;
    title: string;
    number: number;
    subTitle: string;
  }

@Injectable({
    providedIn: 'root'
})
export class FunfactsService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

     getData(){
         let url = 'assets/data/funfacts.json'//`${this.API_URL}/funfact?populate=*`;
         return this.http.get<Funfact[]>(url);
     }

}