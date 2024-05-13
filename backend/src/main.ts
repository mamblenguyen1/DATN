import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1/api');

  // const swaggerConfig = new DocumentBuilder()
  //             .setTitle('Eduman Examples')
  //             .setDescription('The Eduman API descriptions')
  //             .setVersion('1.0')
  //             .addTag('eduman')
  //             .build();
  // const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  // SwaggerModule.setup('swagger-ui', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
