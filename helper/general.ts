export const getResponsiveType = (type: string) => {
    if (type === "villas") {
        return {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 2.5,
                slidesToSlide: 1, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 768 },
                items: 2,
                slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 768, min: 0 },
                items: 2,
                slidesToSlide: 1,
            },
        };
    } else if (type === "hero") {
        return {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1.55,
                slidesToSlide: 1, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 768 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 768, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
        };
    } else if (type === "amenities") {
        return {
            desktop: {
                breakpoint: { max: 3000, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 768 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 768, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
        };
    }
    // incase none of the condition match
    return {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
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
}