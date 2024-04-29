import mongoose from "mongoose";
import Course from "../libs/models/courses/course.js";
import { createCarousel, getCarousels } from "../libs/modelActions/commons/carouselModelActions.js";
import {
    createCourseLearning,
    createCourseLesson,
    createCourseLessons,
    findCourseById,
    getCourseLearning,
    getFeaturedCourses,
} from "../libs/modelActions/courses/courseModelActions.js";
import Carousel from "../libs/models/commons/carousel.js";
import CourseLesson from "../libs/models/courses/courseLesson.js";

const CONNECT_STRING = "mongodb://localhost:27017/edumandb";

mongoose.connect(CONNECT_STRING);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb connection error"));

/**
 * Courses
 */

// createCourseLesson('There is no spoon').then((res) => {
//   console.log("🚀 ~ createCourseLesson ~ res:", res);
// })

// createCourseLessons([{title: 'abc'}, {title: 'xyz'}, {title: 'ddd'}])
// .then((res) => {
//   return createCourseLearning({title: 'Course learning', lessons: res.map(t => t._id)}).then((res) => {
//     console.log("🚀 ~ returncreateCourseLearning ~ res:", res);

//   })
// })

// 661d58bc63636fb80df6f4ec

getCourseLearning("661d58bc63636fb80df6f4ec").then((res) => {
    console.log("🚀 ~ res:", res.lessons);
    return;
});

// const courseSummary = new CourseSummary({
//     subscribers: 12663,
//     hours: 50.2,
//     topics: 10,
//     lessons: 178,
//     exercises: 474
// });
// await courseSummary.save();
// const course = new Course({
//     title: 'abc',
//     slug: '111',
//     featured: true,
//     summaries: courseSummary._id
// })
// await course.save()
// const price = new CoursePrice({
//     price: 899000,
//     sale_price: 699000
// })
// await price.save();

// getFeaturedCourses().then((res) => console.log('>>> ', res[0].summaries));
// findBySlug('111').then(async(res) => {
//     res.prices = price._id,
//     await res.save()
//     console.log('>>> ', res);
// });
// findCourseById('66197338448acad44f37ebe1').then(async(res) => {
//     console.log("🚀 ~ findCourseById ~ res:", res);
//     // res.prices.discount_rate = 22;
//     await res.save()
// });

/**
 * Carousels
 */

// await Carousel.insertMany([
//   {
//     title: "google",
//     position: "top_carousel",
//     url: "http://google.com",
//     media: "https://picsum.photos/200",
//     published: true,
//     display_order: 1,
//   },
//   {
//     title: "facebook",
//     position: "top_carousel",
//     url: "http://facebook.com",
//     media: "https://picsum.photos/200",
//     published: true,
//     display_order: 2,
//   },
// ]);

// createCarousel({title: 'aa', position: 'top_carousel', media: 'cc', url: 'dd'})

getCarousels("top_carousel").then((res) => {
    console.log("🚀 ~ getCarousels ~ res:", res);
});
