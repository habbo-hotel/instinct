import {NestFactory} from '@nestjs/core';
import {useContainer} from 'class-validator';
import {ValidationPipe} from '@nestjs/common';
import {InstinctModule} from './instinct.module';
import { requestLogMiddleware } from './health/request-log.middleware';

async function bootstrap() {
  const app = await NestFactory.create(InstinctModule, );

  useContainer(app.select(InstinctModule), {fallbackOnErrors: true});

  app.useGlobalPipes(new ValidationPipe({transform: true}));

  app.use(requestLogMiddleware);

  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
