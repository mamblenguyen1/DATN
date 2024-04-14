import { Schema, model } from "mongoose";
import timestampsPlugin from "mongoose-timestamp";

const courseLessonSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: ''
    }
})

courseLessonSchema.plugin(timestampsPlugin);

const CourseLesson = model('CourseLesson', courseLessonSchema);
export default CourseLesson;