import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ArticleCategoryEntity} from './article-category.entity';

@Injectable()
export class ArticleCategoryRepository {
  private readonly eagerRelations: Array<keyof ArticleCategoryEntity> = [];

  constructor(@InjectRepository(ArticleCategoryEntity) private readonly articleCategoryRepo: Repository<ArticleCategoryEntity>) {}

  getAll(): Promise<ArticleCategoryEntity[]> {
    return this.articleCategoryRepo.find({
      relations: this.eagerRelations,
    });
  }
}
