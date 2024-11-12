import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselBasicExample(){
  return (
    <  >
      <TECarousel className="z-[0]" showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://www.portronics.com/cdn/shop/files/Dash_10_Banner_Web.png?v=1728994994"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
             
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://www.portronics.com/cdn/shop/files/Harmony_Banner_Web.png?v=1718344894"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://www.portronics.com/cdn/shop/files/Glide_Banner_Web.png?v=1725427891"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-0 hidden py-5 text-center text-white md:block">
             
            </div>
          </TECarouselItem>

          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://www.portronics.com/cdn/shop/files/Glide_Banner_Web.png?v=1725427891"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-0 hidden py-5 text-center text-white md:block">
             
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}