import { Component, Input, OnInit, input } from '@angular/core';
import { HowItWorksService } from './how-it-works.service';
import { HowItWorksData } from '../services/services.interfaces';

@Component({
    selector: 'app-how-it-works',
    templateUrl: './how-it-works.component.html',
    styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
    @Input()
	public howItWorksData!: HowItWorksData;

    constructor(
        private content: HowItWorksService
    ) {
        // this.content.getData().subscribe((howItWorksData: any) => {
        //     this.howItWorksData = howItWorksData.data.attributes;
        // });
    }

    ngOnInit(): void {}

}