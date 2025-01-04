import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';
import { ServicesService } from '../../common/services/services.service';
import { SeoConfig, ServiceDetails } from '../../common/services/services.interfaces';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-services-details-page',
    templateUrl: './services-details-page.component.html',
    styleUrls: ['./services-details-page.component.scss']
})
export class ServicesDetailsPageComponent implements OnInit {

    public slug: any;
	public servicesData: any;
    public serviceDetailsData! : ServiceDetails;
    private API_URL= environment.API_URL;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
		private content: ServicesService,
        private titleService: Title, 
        private metaService: Meta
    ) {
       

        this.route.params.subscribe((param : any)=>{

            this.content.getData().subscribe((servicesData: ServiceDetails[]) => {
                this.serviceDetailsData = servicesData.filter(s=>{
                           return s.slug==param.slug
                })[0];
        console.log("ctor",this.servicesData)
        console.log("ctor",this.serviceDetailsData)
        console.log("onoinit",this.serviceDetailsData.seoConfig)
        this.setSeo(this.serviceDetailsData.seoConfig);
            });
           
        });
		
    }
    settings = {
        counter: false,
        plugins: [lgVideo]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };
    ngOnInit(): void {
        
       
    }
    private setSeo(config: SeoConfig): void {
        // Set the title
        this.titleService.setTitle(config.title);
    
        // Set the meta tags
        config.metaTags.forEach(tag => {
          this.metaService.updateTag({ name: tag.name, content: tag.content });
        });
      }
}