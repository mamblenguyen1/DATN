import Carousel from "../../models/commons/carousel.js";

export const getCarousels = (position) => {
    return Carousel.find({ position }).sort({ display_order: "asc" }).exec();
};

export const createCarousel = (position) => {
    
}

// export default {
//     getCarousels
// }
