import { Component, OnInit } from '@angular/core';
import { HomethreeAboutService } from './homethree-about.service';

@Component({
	selector: 'app-homethree-about',
	templateUrl: './homethree-about.component.html',
	styleUrls: ['./homethree-about.component.scss']
})
export class HomethreeAboutComponent implements OnInit {

	public aboutData: any;

    constructor(
        private content: HomethreeAboutService
    ) {
        this.content.getData().subscribe((aboutData: any) => {
            this.aboutData = aboutData.data.attributes;
        });
    }

	ngOnInit(): void {}

}