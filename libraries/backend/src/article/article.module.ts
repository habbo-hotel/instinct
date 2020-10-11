import {Module} from '@nestjs/common';
import {SessionModule} from '../session';
import {ArticlePipe} from './article.pipe';
import {DatabaseModule} from '../database';
import {ArticleService} from './article.service';
import {ArticleController} from './article.controller';
import {ArticleCategoryController} from './category.controller';

@Module({
  imports: [SessionModule, DatabaseModule],
  controllers: [ArticleController, ArticleCategoryController],
  providers: [ArticlePipe, ArticleService],
  exports: [ArticlePipe, ArticleService],
})
export class ArticleModule {}
