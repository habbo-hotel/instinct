import {ArticleEntity} from './article.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(ArticleEntity)
export class ArticleRepository extends Repository<ArticleEntity> {

  readonly eagerRelations: string[] = [];

}