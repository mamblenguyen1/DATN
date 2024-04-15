import { Schema, SchemaTypes, model } from "mongoose";
import autopopulatePlugin from "mongoose-autopopulate";
import { COURSE_TYPES } from "../../utils/constants.js";


const courseSchema = new Schema({
    /**
     * ================
     * Generals
     * ================
     */
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true,
        default: false,
    }, // The course will be show in home page
    display_order: {
        type: Number,
        required: true,
        default: 0
    },
    type: {
        type: String,
        enum: [COURSE_TYPES.SINGLE, COURSE_TYPES.SERIES],
        default: COURSE_TYPES.SINGLE
    },
    /**
     * ===================
     * Summaries
     * ===================
     */
    subscribers: {
        type: Number,
        default: 0
    },
    topics: {
        type: Number,
        default: 0
    },
    lessons: {
        type: Number,
        default: 0
    },
    exercises: {
        type: Number,
        default: 0
    },
    hours: {
        type: Number,
        default: null
    },
    valueable_month: {
        type: Number,
        default: 12
    },
    // Number of course combo
    combinations: {
        type: Number,
        default: null
    },
    phone_platform: {
        type: Boolean,
        default: true
    },
    desktop_platform: {
        type: Boolean,
        default: true
    },
    /**
     * ================
     * Prices
     * ================
     */
    price: {
        type: Number,
        default: 0
    },
    sale_price: {
        type: Number,
        default: null
    },
    discount_rate: {
        type: Number,
        default: null
    },
    objectives: {
        type: SchemaTypes.ObjectId,
        ref: 'CourseDetail',
        required: false,
        autopopulate: true
    },
    information: {
        type: SchemaTypes.ObjectId,
        ref: 'CourseDetail',
        required: false,
        autopopulate: true
    },
    syllabuses: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'CourseSyllabus',
            required: false,
            autopopulate: true
        }
    ],
    tags: [String],
}, { timestamps: true });

courseSchema.plugin(autopopulatePlugin);

const Course = model("Course", courseSchema);
export default Course;
