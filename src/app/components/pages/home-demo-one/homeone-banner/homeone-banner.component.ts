import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeoneBannerService } from './homeone-banner.service';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

	public bannerData: any;
	public bannerListsData: any;

    constructor(
        private content: HomeoneBannerService
	) {
        this.content.getData().subscribe((bannerData: any) => {
            this.bannerData = bannerData.data.attributes;
        });
        this.content.getListsData().subscribe((bannerListsData: any) => {
            this.bannerListsData = bannerListsData.data.attributes;
        });
	}

    ngOnInit(): void {}

    homeSlides: OwlOptions = {
		items: 1,
		margin: 0,
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