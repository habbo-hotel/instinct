import {
  IsBoolean,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsObject,
  IsEnum,
} from 'class-validator';
import {
  BusinessType,
  BusinessDTO as BusinessDTOI,
  BusinessPositionDTO as BusinessPositionDTOI,
} from '@instinct-prj/interface-rp';

export class BusinessDTO implements BusinessDTOI {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  desc!: string;

  @IsEnum(BusinessType)
  type!: BusinessType;

  @IsString()
  @IsNotEmpty()
  badge!: string;

  @IsNumber()
  homeRoom!: number;

  @IsNumber()
  investment!: number;

  @IsObject({each: true})
  positions!: BusinessPositionDTO[];
}

class BusinessPositionDTO implements BusinessPositionDTOI {
  @IsNumber()
  order!: number;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  maleUniform!: string;

  @IsString()
  @IsNotEmpty()
  femaleUniform!: string;

  @IsBoolean()
  canHire!: boolean;

  @IsBoolean()
  canFire!: boolean;

  @IsBoolean()
  canPromote!: boolean;

  @IsBoolean()
  canDemote!: boolean;

  @IsBoolean()
  isManager!: boolean;

  @IsNumber()
  shiftWage!: number;

  @IsNumber()
  shiftTime!: number;
}
