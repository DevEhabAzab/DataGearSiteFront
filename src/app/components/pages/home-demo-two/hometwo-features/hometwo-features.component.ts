import { Component, OnInit } from '@angular/core';
import { HometwoFeaturesService } from './hometwo-features.service';

@Component({
  selector: 'app-hometwo-features',
  templateUrl: './hometwo-features.component.html',
  styleUrls: ['./hometwo-features.component.scss']
})
export class HometwoFeaturesComponent implements OnInit {

	public featuresData: any;

    constructor(
        private content: HometwoFeaturesService
    ) {
        this.content.getData().subscribe((featuresData: any) => {
            this.featuresData = featuresData.data.attributes;
        });
    }

    ngOnInit(): void {}

}