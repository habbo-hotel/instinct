import {Controller, Get} from '@nestjs/common';
import {ArticleCategory} from 'instinct-interfaces';
import {articleCategoryWire} from '../database/entity/article';
import {ArticleCategoryRepository} from '../database/entity/article';

@Controller('articles/categories')
export class ArticleCategoryController {
  constructor(private readonly articleCategoryRepo: ArticleCategoryRepository) {}

  @Get()
  async getAllCategories(): Promise<ArticleCategory[]> {
    const categories = await this.articleCategoryRepo.getAll();
    return categories.map(_ => articleCategoryWire(_));
  }
}
