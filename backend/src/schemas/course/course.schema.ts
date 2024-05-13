import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Course {
  /**
   * ===================
   *  General
   * ===================
   */

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true, default: false })
  featured: boolean; // The course will be show in home page

  @Prop({ required: true, default: 0 })
  display_order: number;
}

export type CourseDocument = HydratedDocument<Course>;

export const CourseSchema = SchemaFactory.createForClass(Course);
