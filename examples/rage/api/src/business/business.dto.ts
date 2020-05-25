import {IsBoolean, IsNumber, IsOptional, IsString} from 'class-validator';

export class BusinessDTO {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  badge!: string;

  @IsNumber()
  roomID!: number;

  @IsBoolean()
  @IsOptional()
  isHiring?: boolean;
}

export class BusinessSearchDTO {
  @IsString()
  name!: string;
}

export class BusinessJobApplicationDTO {
  @IsString()
  content!: string;
}
