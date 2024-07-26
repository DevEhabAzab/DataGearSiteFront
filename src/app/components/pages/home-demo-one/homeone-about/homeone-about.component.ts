import { Component, OnInit } from '@angular/core';
import { HomeoneAboutService } from './homeone-about.service';

@Component({
    selector: 'app-homeone-about',
    templateUrl: './homeone-about.component.html',
    styleUrls: ['./homeone-about.component.scss']
})
export class HomeoneAboutComponent implements OnInit {

	public aboutData: any;
	public aboutPartnersData: any;

    constructor(
        private content: HomeoneAboutService
    ) {
        this.content.getData().subscribe((aboutData: any) => {
            this.aboutData = aboutData.data.attributes;
        });
        this.content.getPartnersData().subscribe((aboutPartnersData: any) => {
            this.aboutPartnersData = aboutPartnersData.data.attributes;
        });
    }

    ngOnInit(): void {}

}