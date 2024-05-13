import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CourseDetail,
  CourseDetailSchema,
} from 'src/schemas/course/course-detail.schema';
import {
  CourseLesson,
  CourseLessonSchema,
} from 'src/schemas/course/course-lesson.schema';
import { CoursesController } from './courses.controller';
import { CoursesService } from './services/courses.service';
import { CourseLessonService } from './services/course-lesson.service';
import { DatabaseModule } from 'src/core/db/database.module';

@Module({
  imports: [
    // DatabaseModule.forFeature({ name: CourseLesson.name, schema: CourseLessonSchema })
    DatabaseModule.forFeatures([
      { name: CourseLesson.name, schema: CourseLessonSchema },
      { name: CourseDetail.name, schema: CourseDetailSchema },
    ]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService, CourseLessonService],
})
export class CoursesModule {}
