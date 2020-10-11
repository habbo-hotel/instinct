import {ArticleCategory} from 'instinct-interfaces';
import {ArticleCategoryDTO} from './category.dto';
import {CategoryPipe} from './category.pipe';
import {HasScope} from '../session/permission-scope.decorator';
import {ArticleCategoryRepository} from '../database/entity/article';
import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ArticleCategoryEntity, articleCategoryWire} from '../database/entity/article';

@Controller('articles/categories')
export class ArticleCategoryController {
  constructor(private readonly articleCategoryRepo: ArticleCategoryRepository) {}

  @Get()
  async getAllCategories(): Promise<ArticleCategory[]> {
    const categories = await this.articleCategoryRepo.getAll();
    return categories.map(_ => articleCategoryWire(_));
  }

  @Post()
  @HasScope('websiteManageNews')
  async createCategory(@Body() categoryDTO: ArticleCategoryDTO): Promise<ArticleCategory> {
    const category = await this.articleCategoryRepo.create(categoryDTO.category);
    return articleCategoryWire(category);
  }

  @Patch(':categoryID')
  @HasScope('websiteManageNews')
  async updateCategory(@Param('categoryID', CategoryPipe) category: ArticleCategoryEntity, @Body() categoryDTO: ArticleCategoryDTO): Promise<string> {
    await this.articleCategoryRepo.updateByID(category.id!, categoryDTO.category);
    return 'Your changes have been saved';
  }

  @Delete(':categoryID')
  @HasScope('websiteManageNews')
  async deleteCategory(@Param('categoryID', CategoryPipe) category: ArticleCategoryEntity): Promise<string> {
    await this.articleCategoryRepo.deleteByID(category.id!);
    return 'Article category has been deleted';
  }
}
