import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HometwoBannerService } from './hometwo-banner.service';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

	public bannerData: any;

    constructor(
        private content: HometwoBannerService
	) {
        this.content.getData().subscribe((bannerData: any) => {
            this.bannerData = bannerData.data.attributes;
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