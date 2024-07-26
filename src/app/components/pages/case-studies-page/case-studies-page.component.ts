import { Component, OnInit } from '@angular/core';
import { CaseStudiesPageService } from './case-studies-page.service';

@Component({
    selector: 'app-case-studies-page',
    templateUrl: './case-studies-page.component.html',
    styleUrls: ['./case-studies-page.component.scss']
})
export class CaseStudiesPageComponent implements OnInit {

	public caseStudiesData: any;
    
    constructor(
		private content: CaseStudiesPageService
    ) {
		this.content.getData().subscribe((caseStudiesData: any) => {
            this.caseStudiesData = caseStudiesData.data;
        });
    }

    ngOnInit(): void {}

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}