import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CourseLessonService } from './course-lesson.service';
import { Model } from 'mongoose';
import { Course } from 'src/schemas/course/course.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CourseLesson } from 'src/schemas/course/course-lesson.schema';

@Injectable()
export class CoursesService {
  constructor(
  ) { }

  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
