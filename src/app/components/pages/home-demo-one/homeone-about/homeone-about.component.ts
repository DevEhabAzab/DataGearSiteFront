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
            console.log(aboutData)
            this.aboutData = aboutData.aboutData ;
            console.log("about data ",this.aboutData)
        });
        // this.content.getPartnersData().subscribe((aboutPartnersData: any) => {
        //     console.log(aboutPartnersData )

        //     this.aboutPartnersData = aboutPartnersData;
        //     console.log(this.aboutPartnersData)

        // });
    }

    ngOnInit(): void {}

}