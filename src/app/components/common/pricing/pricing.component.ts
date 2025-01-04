import { Component, Input, OnInit } from '@angular/core';
import { PricingService } from './pricing.service';
import { PricingData } from '../services/services.interfaces';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

    @Input()
	public pricingData!: PricingData;

    constructor(
        private content: PricingService
    ) {
        // this.content.getData().subscribe((pricingData: any) => {
        //     this.pricingData = pricingData.data.attributes;
        // });
    }

    ngOnInit(): void {}

}