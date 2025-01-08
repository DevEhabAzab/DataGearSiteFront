import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SubscribeService {

    private API_URL= environment.API_URL;
    constructor(
        private http : HttpClient
    ) {}
    subscribeUrl=`${this.API_URL}/Subscribe/AddSubscriber`;
    getData(){
        let url = `${this.API_URL}/subscribe?populate=*`;
        return this.http.get(url);
    }
    create(email:string){
        let url = `${this.API_URL}/Subscribe/AddSubscriber`;
        let subscriber={
            "email":email
        }
        return this.http.post(url,subscriber);
    }

}