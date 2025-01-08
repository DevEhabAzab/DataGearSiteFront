import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribeService } from './subscribe.service';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

	// public subscribeData: any;
        email:string='';

    constructor(
        public router: Router,
        private content: SubscribeService,
        private notifier: NotifierService

    ) {
        // this.content.getData().subscribe((subscribeData: any) => {
        //     this.subscribeData = subscribeData.data.attributes;
        // });
        console.log("router ", router.url)
    }
    onSubmit() {

        this.content.create(this.email).subscribe((result: any) => {
            console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",this.notifier)
            //alert(`Name: ${this.slug}, Email: ${this.title} slug name in server is ${result}`);
            this.notifier.notify('success', 'Now you can receve our updates!');

          },(err)=>{
            this.notifier.notify('error', 'something went wrong!');

          });


    }
    ngOnInit(): void {}

}