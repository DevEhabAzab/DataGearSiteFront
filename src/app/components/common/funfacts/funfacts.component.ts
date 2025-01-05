import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunfactsService } from './funfacts.service';
import { FunfactItem } from '../services/services.interfaces';

@Component({
    selector: 'app-funfacts',
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent implements OnInit {
    @Input()
	public funfactsData!: FunfactItem[];

    constructor(
        public router: Router,
        private content: FunfactsService
    ) {
        if(!router.url.includes("/service")){
            console.log(this.funfactsData)
            this.content.getData().subscribe((funfactsData: any) => {
                this.funfactsData = funfactsData;
            });

        }
       
    }

    ngOnInit(): void {}

}