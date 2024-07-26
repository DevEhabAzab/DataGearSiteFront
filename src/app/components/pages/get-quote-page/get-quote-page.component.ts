import { Component, OnInit } from '@angular/core';
import { WhyChooseUsService } from '../../common/why-choose-us/why-choose-us.service';

@Component({
    selector: 'app-get-quote-page',
    templateUrl: './get-quote-page.component.html',
    styleUrls: ['./get-quote-page.component.scss']
})
export class GetQuotePageComponent implements OnInit {

    public whyChooseUsData: any;

    constructor(
        private content: WhyChooseUsService
    ) {
        this.content.getData().subscribe((whyChooseUsData: any) => {
            this.whyChooseUsData = whyChooseUsData.data.attributes;
        });
    }

    ngOnInit(): void {}

}