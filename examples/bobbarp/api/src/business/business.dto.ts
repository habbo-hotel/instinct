import {IsString} from 'class-validator';

export class BusinessSearchDTO {
  @IsString()
  name!: string;
}
