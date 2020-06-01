import {IsString} from 'class-validator';

export class TwoFactorAuthDTO {

  @IsString()
  oneTimeCode!: string;

}