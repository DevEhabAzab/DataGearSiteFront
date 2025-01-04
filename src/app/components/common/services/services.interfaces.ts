export interface ServiceDetails {
    slug:string;
    title: string;
    icon:string;
    description: string;
    shortTitle:string;
    shortDescription: string;
    image: string;
    video:string;
    quotes:string[];
    howItWorks: HowItWorksData;
    pricingData: PricingData;
    funfactsData: FunfactItem[];
    partnerData: PartnerItem[];
    seoConfig:SeoConfig;
  }
  export interface SeoConfig {
    title: string;
    metaTags: Array<{ name: string; content: string }>;
  }
  export interface HowItWorksData {
    image: string;
    workplan: WorkPlanItem[];
  }
  
  export interface WorkPlanItem {
    icon: string;
    title: string;
    paragraph: string;
  }
  
  export interface PricingData {
    title: string;
    plans: PricingPlan[];
  }
  
  export interface PricingPlan {
    title: string;
    subTitle: string;
    price: number;
    subText: string;
    features: Feature[];
    buttonLink: string;
    buttonText: string;
  }
  
  export interface Feature {
    icon: string;
    title: string;
  }
  
  export interface FunfactItem {
    icon: string;
    title: string;
    number: number;
    subTitle: string;
  }
  
  export interface PartnerItem {
    image: string;
    name: string;
  }
  