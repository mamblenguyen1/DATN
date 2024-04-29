import { Schema, model } from "mongoose";

const carouselSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            default: ''
        },
        url: {
            type: String,
            required: false,
            default: ''
        },
        position: {
            type: String,
            required: false
        },
        media: {
            type: String,
            required: false
        },
        published: {
            type: Boolean,
            required: false,
            default: false
        },
        display_order: {
            type: Number,
            required: false,
            default: 0
        },
    },
    { timestamps: true }
);

const Carousel = model("Carousel", carouselSchema);
export default Carousel;
