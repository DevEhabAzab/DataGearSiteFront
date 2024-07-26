import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../common/services/services.service';

@Component({
    selector: 'app-services-page-one',
    templateUrl: './services-page-one.component.html',
    styleUrls: ['./services-page-one.component.scss']
})
export class ServicesPageOneComponent implements OnInit {

	public servicesData: any;

    constructor(
		private content: ServicesService
    ) {
		this.content.getData().subscribe((servicesData: any) => {
            this.servicesData = servicesData.data;
        });
    }

    ngOnInit(): void {}

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}