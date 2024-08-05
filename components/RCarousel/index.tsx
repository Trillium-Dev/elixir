import { getResponsiveType } from "@/helper/general";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const villasResponsive = {
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 2.5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function RCarousel({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "villas" | "hero" | "amenities";
}) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      // autoPlay
      // autoPlaySpeed={5000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={getResponsiveType(type)}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      swipeable
    >
      {children}
    </Carousel>
  );
}

export default RCarousel;
