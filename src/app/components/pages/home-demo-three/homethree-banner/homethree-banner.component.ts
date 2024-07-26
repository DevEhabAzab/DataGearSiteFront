import { Component, OnInit } from '@angular/core';
import { HomethreeBannerService } from './homethree-banner.service';

@Component({
    selector: 'app-homethree-banner',
    templateUrl: './homethree-banner.component.html',
    styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {

    public bannerData: any;

    constructor(
        private content: HomethreeBannerService
    ) {
        this.content.getData().subscribe((bannerData: any) => {
            this.bannerData = bannerData.data.attributes;
        });
    }

    ngOnInit(): void {}

}