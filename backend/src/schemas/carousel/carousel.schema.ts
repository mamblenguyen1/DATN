import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Carousel {
  @Prop({ required: true, default: '' })
  title: string;

  @Prop({ required: true, default: '' })
  url: string;

  @Prop()
  position: string;

  @Prop()
  media: string;

  @Prop()
  published: boolean;

  @Prop({ default: 0 })
  display_order: number;
}

export type CarouselDocument = HydratedDocument<Carousel>;

export const CarouselSchema = SchemaFactory.createForClass(Carousel);
