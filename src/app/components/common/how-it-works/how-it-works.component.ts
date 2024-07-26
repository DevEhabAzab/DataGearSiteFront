import { Component, OnInit } from '@angular/core';
import { HowItWorksService } from './how-it-works.service';

@Component({
    selector: 'app-how-it-works',
    templateUrl: './how-it-works.component.html',
    styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

	public howItWorksData: any;

    constructor(
        private content: HowItWorksService
    ) {
        this.content.getData().subscribe((howItWorksData: any) => {
            this.howItWorksData = howItWorksData.data.attributes;
        });
    }

    ngOnInit(): void {}

}