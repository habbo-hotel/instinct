import {IsString} from 'class-validator';

export class NewRankDTO {
  @IsString()
  name!: string;

  @IsString()
  desc!: string;

  @IsString()
  badge!: string;
}
