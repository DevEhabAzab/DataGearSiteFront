import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from './team.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

	public teamData: any;

    constructor(
        public router: Router,
        private content: TeamService
    ) {
        this.content.getData().subscribe((teamData: any) => {
            this.teamData = teamData;
        });
    }

    ngOnInit(): void {}
    teamSlides: OwlOptions = {
		items: 4,
		margin: 10,
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