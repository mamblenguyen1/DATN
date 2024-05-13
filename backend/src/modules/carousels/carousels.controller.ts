import {
  Controller
} from '@nestjs/common';
import { CRUDController } from 'src/core/rest/crud.controller';
import { Carousel } from 'src/schemas/carousel/carousel.schema';
import { CarouselsService } from './carousels.service';
import { CreateCarouselDto } from './dto/create-carousel.dto';

@Controller('carousels')
export class CarouselsController extends CRUDController<Carousel, CreateCarouselDto> {
  constructor(private readonly carouselsService: CarouselsService) {
    super(carouselsService)
  }
}
