import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarouselsModule } from './modules/carousels/carousels.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './modules/courses/courses.module';
import { DatabaseModule } from './core/db/database.module';

@Module({
  imports: [
    DatabaseModule,
    CarouselsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/edumandb'),
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
