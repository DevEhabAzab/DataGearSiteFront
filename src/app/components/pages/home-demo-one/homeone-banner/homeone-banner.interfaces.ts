export interface HomeSlide {
    backgroundImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    subTitle: string;
    title: string;
    paragraph: string;
    buttonText: string;
    buttonLink: string;
  }
  
  export interface BannerData {
    title: string;
    buttonText: string;
    buttonLink: string;
    homeSlides: HomeSlide[];
  }
  
  export interface BannerListsData {
    lists: { title: string }[];
  }
  