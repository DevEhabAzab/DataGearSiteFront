import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';


export interface Community {
    subTitle: string;
    title: string;
    paragraph: string;
    buttonText: string;
    buttonLink: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    shape1?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    shape2?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    shape3?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    shape4?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  }
  
@Injectable({
    providedIn: 'root'
})
export class CommunityService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url =  '/assets/data/community.json';
        return this.http.get<Community>(url);
        // let url = `${this.API_URL}/community?populate=*`;
        // return this.http.get(url);
    }

}