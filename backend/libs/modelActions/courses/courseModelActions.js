import Course from "../../models/courses/course.js";

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