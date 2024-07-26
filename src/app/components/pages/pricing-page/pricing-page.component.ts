import { Component, OnInit } from '@angular/core';
import { PricingService } from '../../common/pricing/pricing.service';

@Component({
    selector: 'app-pricing-page',
    templateUrl: './pricing-page.component.html',
    styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

	public pricingData: any;

    constructor(
        private content: PricingService
    ) {
        this.content.getData().subscribe((pricingData: any) => {
            this.pricingData = pricingData.data.attributes;
        });
    }

    ngOnInit(): void {}

}