import { Component, Input, OnInit } from '@angular/core';
import { PartnerService } from './partner.service';
import { PartnerItem } from '../services/services.interfaces';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

    @Input()
    public partnerData!: PartnerItem[];

    constructor(
        private content: PartnerService
    ) {
        // this.content.getData().subscribe((partnerData: any) => {
        //     this.partnerData = partnerData.data.attributes;
        // });
    }

    ngOnInit(): void {}

}