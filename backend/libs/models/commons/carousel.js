import { Schema, model } from "mongoose";

const carouselSchema = new Schema({
    title: String,
    url: String,
    position: String,
    media: String,
    published: Boolean,
    display_order: Number
}, { timestamps: true });

const Carousel = model('Carousel', carouselSchema);
export default Carousel;