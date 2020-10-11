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

  getByID(categoryID: number): Promise<ArticleCategoryEntity> {
    return this.articleCategoryRepo.findOneOrFail({
      where: {
        id: categoryID,
      },
    });
  }

  create(category: string): Promise<ArticleCategoryEntity> {
    return this.articleCategoryRepo.save({
      category,
    });
  }

  async updateByID(categoryID: number, category: string): Promise<void> {
    await this.articleCategoryRepo.update(categoryID, {category});
  }

  async deleteByID(categoryID: number): Promise<void> {
    await this.articleCategoryRepo.delete(categoryID);
  }
}
