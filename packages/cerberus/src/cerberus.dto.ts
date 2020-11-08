import {IsString, IsNotEmpty} from 'class-validator';

export class CerberusDTO {
  @IsString()
  @IsNotEmpty()
  command!: string;

  @IsString()
  @IsNotEmpty()
  token!: string;
}
