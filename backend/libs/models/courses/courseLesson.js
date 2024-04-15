import { Schema, model } from "mongoose";

const courseLessonSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: ''
    }
}, { timestamps: true })

const CourseLesson = model('CourseLesson', courseLessonSchema);
export default CourseLesson;