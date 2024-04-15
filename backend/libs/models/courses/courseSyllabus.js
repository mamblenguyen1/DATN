import { Schema, SchemaTypes, model } from "mongoose";
import timestampsPlugin from "mongoose-timestamp";
import CourseLearning from "./courseLearning.js";

const courseSyllabusSchema = new Schema({
    learnings: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'CourseLearning',
            required: false,
            autopopulate: true
        }
    ]
}, { timestamps: true });

const CourseSyllabus = model('CourseSyllabus', courseSyllabusSchema);
export default CourseSyllabus;