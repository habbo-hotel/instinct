import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import {UniqueEmail} from './constraint/unique-email/unique-email.constraint';
import {UniqueUsername} from './constraint/unique-username/unique-username.constraint';

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
