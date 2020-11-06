import {Injectable} from '@nestjs/common';
import {BaseRepository} from '../base.repository';
import {ArticleCategoryEntity} from './article-category.entity';

@Injectable()
export class ArticleCategoryRepository extends BaseRepository<
  ArticleCategoryEntity
> {
  constructor() {
    super(ArticleCategoryEntity, []);
  }
}
