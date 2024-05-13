import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { COURSE_DETAIL_TYPES } from 'src/utils/constants';

@Schema({ timestamps: true })
export class CourseDetail {
  @Prop({ required: true })
  title: string;

  @Prop({
    required: true,
    enum: COURSE_DETAIL_TYPES,
    default: COURSE_DETAIL_TYPES.OBJECTIVE,
  })
  type: string;

  @Prop({ required: true, default: '' })
  short_description: string;

  @Prop({ required: true, default: '' })
  content: string;
}

export type CourseDetailDocument = HydratedDocument<CourseDetail>;

export const CourseDetailSchema = SchemaFactory.createForClass(CourseDetail);
