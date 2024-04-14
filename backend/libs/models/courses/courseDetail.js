import { Schema, model } from "mongoose";
import timestampsPlugin from "mongoose-timestamp";
import { COURSE_DETAIL_TYPES } from "../../utils/constants.js";

const courseDetailSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: [COURSE_DETAIL_TYPES.OBJECTIVE, COURSE_DETAIL_TYPES.INFORMATION, COURSE_DETAIL_TYPES.OBJECTIVE],
        default: COURSE_DETAIL_TYPES.OBJECTIVE
    },
    short_description: {
        type: String,
        required: true,
        default: ''
    },
    content: {
        type: String,
        required: true,
        default: ''
    }
})

courseDetailSchema.plugin(timestampsPlugin);

const CourseDetail = model('CourseDetail', courseDetailSchema);
export default CourseDetail;