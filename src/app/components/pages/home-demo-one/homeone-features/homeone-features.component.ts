import { Component, OnInit } from '@angular/core';
import { HomeoneFeaturesService } from './homeone-features.service';
import { FeaturesService } from 'src/app/components/common/features/features.service';

@Component({
    selector: 'app-homeone-features',
    templateUrl: './homeone-features.component.html',
    styleUrls: ['./homeone-features.component.scss']
})
export class HomeoneFeaturesComponent implements OnInit {

	public featuresData: any;

    constructor(
        private content: FeaturesService
    ) {
        this.content.getData().subscribe((featuresData: any) => {
            this.featuresData = featuresData.items;
        });
    }

    ngOnInit(): void {}

}