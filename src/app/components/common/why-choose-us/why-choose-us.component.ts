import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WhyChooseUsService } from './why-choose-us.service';

@Component({
    selector: 'app-why-choose-us',
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {

	public whyChooseUsData: any;

    constructor(
        public router: Router,
        private content: WhyChooseUsService
    ) {
        this.content.getData().subscribe((whyChooseUsData: any) => {
            this.whyChooseUsData = whyChooseUsData.data.attributes;
        });
    }

    ngOnInit(): void {}

}