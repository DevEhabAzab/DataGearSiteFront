import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../common/faq/faq.service';

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

	public faqData: any;

    constructor(
        private content: FaqService
    ) {
        this.content.getData().subscribe((faqData: any) => {
            this.faqData = faqData.data.attributes;
        });
    }

    ngOnInit(): void {}

    // Accordion
    contentHeight: number = 0;
    openSectionIndex: number = -0;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -0;
        } else {
            this.openSectionIndex = index;
            this.calculateContentHeight();
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }
    calculateContentHeight(): void {
        const contentElement = document.querySelector('.accordion-content');
        if (contentElement) {
            this.contentHeight = contentElement.scrollHeight;
        }
    }

}