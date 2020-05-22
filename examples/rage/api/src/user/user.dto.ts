import {UniqueEmail} from './constraint/unique-email';
import {UniqueUsername} from './constraint/unique-username';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class NewUserDTO {
  @IsString()
  @UniqueUsername()
  @IsNotEmpty()
  username!: string;

  @IsEmail()
  @UniqueEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  password!: string;

  @IsString()
  recaptcha!: string;
}
