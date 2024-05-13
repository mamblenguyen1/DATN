import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class CourseLesson {
  @Prop({ required: true, default: '' })
  title: string;
  // @Todo: Update more fields
}

export type CourseLessonDocument = HydratedDocument<CourseLesson>;

export const CourseLessonSchema = SchemaFactory.createForClass(CourseLesson);
