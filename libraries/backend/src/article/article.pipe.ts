import {ArticleService} from './article.service';
import {ArticleEntity} from '../database/entity';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class ArticlePipe implements PipeTransform {
  constructor(private readonly articleService: ArticleService) {}

  async transform(articleID: number): Promise<ArticleEntity> {
    try {
      return await this.articleService.getByID(articleID);
    } catch {
      throw new NotFoundException('Article does not exist');
    }
  }
}
