import {IsOptional, IsString} from 'class-validator';

export class NewUpdateDTO {
  @IsString()
  title!: string;

  @IsString()
  content!: string;
}

export class PartialUpdateDTO {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;
}
