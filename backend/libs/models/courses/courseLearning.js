import { Schema, SchemaTypes, model } from "mongoose";

const courseLearningSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    lessons: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'CourseLesson',
            required: false,
            autopopulate: true
        }
    ],
    display_order: {
        type: Number,
        required: true,
        default: 0
    },
    free: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true })

const CourseLearning = model('CourseLearning', courseLearningSchema);
export default CourseLearning;