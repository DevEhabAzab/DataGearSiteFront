import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FeedbackService } from './feedback.service';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    public feedbackData: any;
	public feedbackSlideData: any;

    constructor(
        private content: FeedbackService
	) {
        this.content.getData().subscribe((feedbackData: any) => {
            this.feedbackData = feedbackData.data.attributes;
        });
        this.content.getSlideData().subscribe((feedbackSlideData: any) => {
            this.feedbackSlideData = feedbackSlideData.data.attributes;
        });
	}

    ngOnInit(): void {}

    feedbackSlides: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow-line-symbol'></i>",
			"<i class='flaticon-right-arrow-angle'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
    }

}