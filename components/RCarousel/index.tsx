import { getResponsiveType } from "@/helper/general";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const villasResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
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
      draggable={false}
      responsive={getResponsiveType(type)}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      renderDotsOutside={true}
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      rtl={false}
      shouldResetAutoplay
      minimumTouchDrag={80}
      swipeable
    >
      {children}
    </Carousel>
  );
}

export default RCarousel;
