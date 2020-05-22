import {Module} from '@nestjs/common';
import {ArticlePipe} from './article.pipe';
import {ArticleController} from './article.controller';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [SessionModule, DatabaseModule],
  controllers: [ArticleController],
  providers: [ArticlePipe],
  exports: [ArticlePipe],
})
export class ArticleModule {}
