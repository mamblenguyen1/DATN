import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CourseLearning } from './course-learning.schema';
import { HydratedDocument, SchemaTypes } from 'mongoose';

@Schema({ timestamps: true })
export class CourseSyllabus {
  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'CourseLearning' }] })
  learnings: CourseLearning[];
}

export type CourseSyllabusDocument = HydratedDocument<CourseSyllabus>;

export const CourseSyllabusSchema =
  SchemaFactory.createForClass(CourseSyllabus);
