import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';
import { ServicesService } from '../../common/services/services.service';

@Component({
    selector: 'app-services-details-page',
    templateUrl: './services-details-page.component.html',
    styleUrls: ['./services-details-page.component.scss']
})
export class ServicesDetailsPageComponent implements OnInit {

    public slug: any;
	public servicesData: any;
    public serviceDetailsData : any;
    private API_URL= environment.API_URL;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
		private content: ServicesService
    ) {
        this.route.params.subscribe((param : any)=>{
            let url = `${this.API_URL}/services?filters[slug][$eq]=${param.slug}&populate=*`;
            let ddd = this.http.get(url);
            ddd.subscribe(res => {
                this.serviceDetailsData = res;
            });
        });
		this.content.getData().subscribe((servicesData: any) => {
            this.servicesData = servicesData.data;
        });
    }

    ngOnInit(): void {}

}