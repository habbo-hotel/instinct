import { IsEmail, IsString } from 'class-validator';
import { UniqueEmail } from './constraint/unique-email';
import { UniqueUsername } from './constraint/unique-username';

export class NewUserDTO {
  @IsString()
  @UniqueUsername()
  username!: string;

  @IsEmail()
  @UniqueEmail()
  email!: string;

  @IsString()
  password!: string;
}
