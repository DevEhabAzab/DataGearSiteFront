import { Component, OnInit } from '@angular/core';
import { HometwoAboutService } from '../home-demo-two/hometwo-about/hometwo-about.service';

@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
	styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

	public aboutData: any;

    constructor(
        private content: HometwoAboutService
    ) {
        this.content.getData().subscribe((aboutData: any) => {
            this.aboutData = aboutData.data.attributes;
        });
    }

    ngOnInit(): void {}

}