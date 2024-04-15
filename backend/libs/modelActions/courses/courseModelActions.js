import Course from "../../models/courses/course.js";
import CourseLearning from "../../models/courses/courseLearning.js";
import CourseLesson from "../../models/courses/courseLesson.js";

/**
 * Course Lesson
 */
export const createCourseLesson = (title) => {
    const courseLesson = new CourseLesson({title});
    return courseLesson.save();
}

export const createCourseLessons = (lessons = []) => {
    return CourseLesson.insertMany(lessons);
}

export const createCourseLearning = ({title, lessons} = {title: '', lessons: []}) => {
    const courseLearning = new CourseLearning({title, lessons});
    return courseLearning.save();
}

export const getCourseLearning = (id) => {
    return CourseLearning.findById(id).exec();
}

export const getFeaturedCourses = () => {
    return Course
        .find({ featured: true })
        .sort({ display_order: 'asc' })
        .exec();
}

export const findCourseById = (course_id) => {
    return Course
    .findById(course_id)
    .exec();
}

export const findCourseBySlug = (slug) => {
    return Course.findOne({ slug }).exec();
}