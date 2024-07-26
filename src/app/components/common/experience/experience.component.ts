import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

	public experienceData: any;

    constructor(
        private content: ExperienceService
    ) {
        this.content.getData().subscribe((experienceData: any) => {
            this.experienceData = experienceData.data.attributes;
        });
    }

    ngOnInit(): void {}

}