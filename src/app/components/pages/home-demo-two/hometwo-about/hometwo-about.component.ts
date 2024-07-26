import { Component, OnInit } from '@angular/core';
import { HometwoAboutService } from './hometwo-about.service';

@Component({
  selector: 'app-hometwo-about',
  templateUrl: './hometwo-about.component.html',
  styleUrls: ['./hometwo-about.component.scss']
})
export class HometwoAboutComponent implements OnInit {

	public aboutData: any;

    constructor(
        private content: HometwoAboutService
    ) {
        this.content.getData().subscribe((aboutData: any) => {
            this.aboutData = aboutData.data.attributes;
        });
    }

    ngOnInit(): void {}

}