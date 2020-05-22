import {IsNumber, IsString} from 'class-validator';

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

  @IsString()
  image!: string;

  @IsNumber()
  userID!: number;
}
