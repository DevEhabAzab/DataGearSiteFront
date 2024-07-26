import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestimonialsService } from './testimonials.service';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

	public testimonialsData: any;
	public testimonialsSlideData: any;

    constructor(
        private content: TestimonialsService
	) {
        this.content.getData().subscribe((testimonialsData: any) => {
            this.testimonialsData = testimonialsData.data.attributes;
        });
        this.content.getSlideData().subscribe((testimonialsSlideData: any) => {
            this.testimonialsSlideData = testimonialsSlideData.data.attributes;
        });
	}

    ngOnInit(): void {}

    testimonialsSlides: OwlOptions = {
		items: 1,
		nav: false,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow-line-symbol'></i>",
			"<i class='flaticon-right-arrow-angle'></i>",
		]
    }

}