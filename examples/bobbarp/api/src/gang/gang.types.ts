import {IsString} from 'class-validator';

export class SearchGangDTO {
  @IsString()
  name!: string;
}
