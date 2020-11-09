import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {useContainer} from 'class-validator';
import {ValidationPipe} from '@nestjs/common';
import {InstinctAppModule} from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';

export async function bootstrapInstinctRoleplayAPI() {
  const app = await NestFactory.create<NestExpressApplication>(
    InstinctAppModule
  );

  app.set('trust proxy', true);

  useContainer(app.select(InstinctAppModule), {fallbackOnErrors: true});

  app.useGlobalPipes(new ValidationPipe({transform: true}));

  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT!);
}
