import {IsEnum, IsNumber, IsString} from 'class-validator';
import {ArticleVisibility} from '../database/entity/article';

export class NewArticleDTO {
  @IsString()
  title!: string;

  @IsString()
  header!: string;

  @IsNumber()
  categoryID!: number;

  @IsString()
  shortStory!: string;

  @IsString()
  fullStory!: string;

  @IsEnum(ArticleVisibility)
  hidden!: ArticleVisibility;

  @IsString()
  image!: string;
}
