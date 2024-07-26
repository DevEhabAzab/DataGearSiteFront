import { Component, OnInit } from '@angular/core';
import { ContactPageService } from './contact-page.service';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    public contactData: any;

    constructor(
        private content: ContactPageService
    ) {
        this.content.getData().subscribe((contactData: any) => {
            this.contactData = contactData.data.attributes;
        });
    }

    ngOnInit(): void {}

}