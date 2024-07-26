import { Component, OnInit } from '@angular/core';
import { PricingService } from './pricing.service';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

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