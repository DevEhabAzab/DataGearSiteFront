import { Component, OnInit } from '@angular/core';
import { WorkPlanService } from './work-plan.service';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
    selector: 'app-work-plan',
    templateUrl: './work-plan.component.html',
    styleUrls: ['./work-plan.component.scss']
})
export class WorkPlanComponent implements OnInit {

	public workPlanData: any;

    constructor(
        private content: WorkPlanService
    ) {
        this.content.getData().subscribe((workPlanData: any) => {
            this.workPlanData = workPlanData.data.attributes;
        });
    }

    ngOnInit(): void {}

    // lightgallery
    settings = {
        counter: false,
        plugins: [lgVideo]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

}