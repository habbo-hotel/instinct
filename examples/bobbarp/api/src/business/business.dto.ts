import {IsString} from 'class-validator';

export class BusinessSearchDTO {
  @IsString()
  name!: string;
}


export class BusinessJobApplicationDTO {
  @IsString()
  content!: string;
}