import { Component, OnInit } from '@angular/core';
import { WhatWeDoService } from './what-we-do.service';

@Component({
    selector: 'app-what-we-do',
    templateUrl: './what-we-do.component.html',
    styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {

	public whatWeDoData: any;

    constructor(
        private content: WhatWeDoService
    ) {
        this.content.getData().subscribe((whatWeDoData: any) => {
            this.whatWeDoData = whatWeDoData.data.attributes;
        });
    }

    ngOnInit(): void {}

}