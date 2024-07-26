import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunfactsService } from './funfacts.service';

@Component({
    selector: 'app-funfacts',
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent implements OnInit {

	public funfactsData: any;

    constructor(
        public router: Router,
        private content: FunfactsService
    ) {
        this.content.getData().subscribe((funfactsData: any) => {
            this.funfactsData = funfactsData.data.attributes;
        });
    }

    ngOnInit(): void {}

}