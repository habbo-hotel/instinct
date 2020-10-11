import {IsNotEmpty, IsString} from 'class-validator';

export class ArticleCategoryDTO {
  @IsString()
  @IsNotEmpty()
  category!: string;
}
