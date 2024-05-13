import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseLesson } from 'src/schemas/course/course-lesson.schema';
import { CreateCourseLessonDto } from '../dto/create-course-lesson.dto';
import { UpdateCourseLessonDto } from '../dto/update-course-lesson.dto';
import { InjectRepository } from 'src/core/decorators/inject-repository.decorator';
import { Repository } from 'src/core/repository/repository';
import { CRUDService } from 'src/core/services/crud.service';

@Injectable()
export class CourseLessonService extends CRUDService<CourseLesson, CreateCourseLessonDto> {
    constructor(
        @InjectRepository(CourseLesson.name)
        private repo: Repository<CourseLesson>
      ) {
        super(repo)
      }
}
