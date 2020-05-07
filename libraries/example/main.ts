import { InstinctModule } from '../backend/src';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';
import { exampleInstinctConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(InstinctModule.forRoot(exampleInstinctConfig));

  useContainer(app.select(InstinctModule), { fallbackOnErrors: true });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
