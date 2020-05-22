import {InjectRepository} from '@nestjs/typeorm';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {ArticleEntity, ArticleRepository} from '../database/instinct/article/article';

@Injectable()
export class ArticlePipe implements PipeTransform {
  constructor(@InjectRepository(ArticleRepository) private readonly articleRepo: ArticleRepository) {}

  async transform(articleID: number): Promise<ArticleEntity> {
    try {
      return await this.articleRepo.findOneByIDOrFail(articleID);
    } catch {
      throw new NotFoundException('Article does not exist');
    }
  }
}
