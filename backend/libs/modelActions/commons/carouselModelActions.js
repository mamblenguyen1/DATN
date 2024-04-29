import Carousel from "../../models/commons/carousel.js";

export const getCarousels = (position) => {
    return Carousel.find({ position }).sort({ display_order: "asc" }).exec();
};

export const createCarousel = ({position, media, url, title}) => {
    return Carousel.create({title: title, url, position, media})
}

export default {
    getCarousels,
    createCarousel
}
