import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from './community.service';

@Component({
    selector: 'app-community',
    templateUrl: './community.component.html',
    styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

	public communityData: any;

    constructor(
        public router: Router,
        private content: CommunityService
    ) {
        this.content.getData().subscribe((communityData: any) => {
            this.communityData = communityData.data.attributes;
        });
    }

    ngOnInit(): void {}

}