import {UserDTO} from '@instinct-prj/interface';
import {UniqueEmail} from './constraint/unique-email';
import {UniqueUsername} from './constraint/unique-username';
import {ValidRecaptcha} from '../google/recaptcha.constraint';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class UserDTOClass implements UserDTO {
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

  @ValidRecaptcha()
  recaptcha!: string;
}
