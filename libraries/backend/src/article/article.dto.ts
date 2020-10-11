import {ArticleVisibility} from '../database/entity/article';
import {IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class NewArticleDTO {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  header!: string;

  @IsNumber()
  categoryID!: number;

  @IsString()
  @IsNotEmpty()
  shortStory!: string;

  @IsString()
  @IsNotEmpty()
  fullStory!: string;

  @IsEnum(ArticleVisibility)
  hidden!: ArticleVisibility;

  @IsString()
  @IsNotEmpty()
  image!: string;
}

export class UpdateArticleDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  header!: string;

  @IsNumber()
  @IsOptional()
  categoryID!: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  shortStory!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fullStory!: string;

  @IsEnum(ArticleVisibility)
  @IsOptional()
  hidden!: ArticleVisibility;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  image!: string;
}
