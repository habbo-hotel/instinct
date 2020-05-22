import * as Moment from 'moment';
import {ArticlePipe} from './article.pipe';
import {NewArticleDTO} from './article.dto';
import {Article} from 'instinct-rp-interfaces';
import {InjectRepository} from '@nestjs/typeorm';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {articleWire} from '../database/instinct/article/article/article.wire';
import {ArticleEntity} from '../database/instinct/article/article/article.entity';
import {ArticleRepository} from '../database/instinct/article/article/article.repository';

@Controller('articles')
export class ArticleController {
  constructor(@InjectRepository(ArticleRepository) private readonly articleRepo: ArticleRepository) {}

  @Post()
  async create(@Body() newArticle: NewArticleDTO): Promise<Article> {
    const article: ArticleEntity = await this.articleRepo.createAndReturn({
      ...newArticle,
      timestamp: Moment().unix(),
    });
    return articleWire(article);
  }

  @Get()
  async getAll(): Promise<Article[]> {
    const articles: ArticleEntity[] = await this.articleRepo.getAll();
    return articles.map(article => articleWire(article));
  }

  @Get(':articleID')
  getByID(@Param('articleID', ArticlePipe) article: ArticleEntity): Article {
    return articleWire(article);
  }
}
