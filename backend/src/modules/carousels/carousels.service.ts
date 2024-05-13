import { Injectable } from '@nestjs/common';
import { InjectRepository } from 'src/core/decorators/inject-repository.decorator';
import { Repository } from 'src/core/repository/repository';
import { CRUDService } from 'src/core/services/crud.service';
import { Carousel } from 'src/schemas/carousel/carousel.schema';
import { CreateCarouselDto } from './dto/create-carousel.dto';

@Injectable()
export class CarouselsService extends CRUDService<Carousel, CreateCarouselDto> {
  constructor(
    @InjectRepository(Carousel.name)
    private repo: Repository<Carousel>
  ) {
    super(repo)
  }
}
