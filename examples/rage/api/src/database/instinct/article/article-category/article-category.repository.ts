import { EntityRepository, Repository } from 'typeorm';
import {ArticleCategoryEntity} from './article-category.entity';

@EntityRepository(ArticleCategoryEntity)
export class ArticleCategoryRepository extends Repository<ArticleCategoryEntity> {

  readonly eagerRelations: string[] = [];

}