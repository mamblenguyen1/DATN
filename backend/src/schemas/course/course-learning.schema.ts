import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CourseLesson } from './course-lesson.schema';
import { HydratedDocument, SchemaTypes } from 'mongoose';

@Schema({ timestamps: true })
export class CourseLearning {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'CourseLesson' }] })
  lessons: CourseLesson[];

  @Prop({ required: true, default: 0 })
  display_order: number;

  @Prop({ required: true, default: false })
  free: boolean;
}

export type CourseLearningDocument = HydratedDocument<CourseLearning>;

export const CourseLearningSchema =
  SchemaFactory.createForClass(CourseLearning);
