import { Component, OnInit } from '@angular/core';
import { HomeoneAboutService } from './homeone-about.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
         this.content.getPartnersData().subscribe((aboutPartnersData: any) => {
             console.log(aboutPartnersData )

            this.aboutPartnersData = aboutPartnersData;
            console.log(this.aboutPartnersData)

         });
    }

    ngOnInit(): void {}
    partnerSlides: OwlOptions = {
		items: 4,
		margin: 20,
		nav: false,
		loop: true,
		dots: true,
		autoplay: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow-line-symbol'></i>",
			"<i class='flaticon-right-arrow-angle'></i>",
		]
    }
}