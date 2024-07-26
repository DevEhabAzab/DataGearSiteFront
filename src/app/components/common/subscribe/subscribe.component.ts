import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribeService } from './subscribe.service';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

	public subscribeData: any;

    constructor(
        public router: Router,
        private content: SubscribeService
    ) {
        this.content.getData().subscribe((subscribeData: any) => {
            this.subscribeData = subscribeData.data.attributes;
        });
    }

    ngOnInit(): void {}

}