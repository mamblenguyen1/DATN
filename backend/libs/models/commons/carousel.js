import { Schema, model } from "mongoose";
import timestampsPlugin from "mongoose-timestamp";

const carouselSchema = new Schema({
    title: String,
    url: String,
    position: String,
    media: String,
    published: Boolean,
    display_order: Number
})

carouselSchema.plugin(timestampsPlugin);

const Carousel = model('Carousel', carouselSchema);
export default Carousel;