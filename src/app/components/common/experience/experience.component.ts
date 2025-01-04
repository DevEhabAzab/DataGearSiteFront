import { Component, OnInit } from '@angular/core';
import { ExperienceFunFactsModel, ExperienceService } from './experience.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

	public experienceData!: ExperienceFunFactsModel;

    constructor(
        private content: ExperienceService
    ) {
        this.content.getData().subscribe((experienceData: any) => {
            this.experienceData = experienceData
        });
    }

    ngOnInit(): void {}

}