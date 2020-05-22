import {Module} from '@nestjs/common';
import {SessionModule} from '../session';
import {ArticlePipe} from './article.pipe';
import {DatabaseModule} from '../database';
import {ArticleController} from './article.controller';

@Module({
  imports: [SessionModule, DatabaseModule],
  controllers: [ArticleController],
  providers: [ArticlePipe],
  exports: [ArticlePipe],
})
export class ArticleModule {}
