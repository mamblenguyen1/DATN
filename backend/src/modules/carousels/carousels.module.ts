import { Module } from '@nestjs/common';
import { CarouselsController } from './carousels.controller';
import { CarouselsService } from './carousels.service';
import { DatabaseModule } from 'src/core/db/database.module';
import { Carousel, CarouselSchema } from 'src/schemas/carousel/carousel.schema';

@Module({
  imports: [
    DatabaseModule.forFeature({name: Carousel.name, schema: CarouselSchema})
  ],
  controllers: [CarouselsController],
  providers: [CarouselsService],
})
export class CarouselsModule { }
