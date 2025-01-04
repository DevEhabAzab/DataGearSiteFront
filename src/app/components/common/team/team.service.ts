import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

export interface Experts{
    subTitle:string;
    title:string;
    members:TeamMember[];
}
 interface TeamMember {
    id: number;
    name: string;
    position: string;
    imageUrl: string;
    socialLinks: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      instagram?: string;
    };
  }
  
@Injectable({
    providedIn: 'root'
})
export class TeamService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url =  '/assets/data/experts.json';
        return this.http.get<Experts>(url);
        // let url = `${this.API_URL}/team?populate=members.image`;
        // return this.http.get(url);
    }

}