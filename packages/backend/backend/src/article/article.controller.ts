import Moment from 'moment';
import {GetSession} from '../session';
import {ArticlePipe} from './article.pipe';
import {Article} from '@instinct-prj/interface';
import {UserEntity} from '../database/user';
import {ArticleRepository} from '../database/article';
import {CreateArticleDTO, UpdateArticleDTO} from './article.dto';
import {HasScope} from '../session/permission-scope.decorator';
import {ArticleEntity, articleWire} from '../database/article';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleRepo: ArticleRepository) {}

  @Post()
  @HasScope('websiteManageNews')
  async create(
    @GetSession() session: UserEntity,
    @Body() newArticle: CreateArticleDTO
  ): Promise<Article> {
    const article: ArticleEntity = await this.articleRepo.create({
      ...newArticle,
      userID: session.id!,
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

  @Patch(':articleID')
  @HasScope('websiteManageNews')
  async updateByID(
    @Param('articleID', ArticlePipe) article: ArticleEntity,
    @Body() changes: UpdateArticleDTO
  ): Promise<string> {
    await this.articleRepo.updateByID(article.id!, changes);
    return 'Your changes have been saved';
  }

  @Delete(':articleID')
  @HasScope('websiteManageNews')
  async deleteByID(
    @Param('articleID', ArticlePipe) article: ArticleEntity
  ): Promise<string> {
    await this.articleRepo.deleteByID(article.id!);
    return 'Article has been deleted successfully';
  }
}
