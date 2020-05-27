import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {UserExists} from '../user/constraint/user-exists/user-exists.constraint';

export class NewSessionDTO {
  @IsString()
  @UserExists()
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}


export class UpdateEmailDTO {

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

}

export class UpdateProfileDTO {

  @IsString()
  youtube!: string;

}

export class UpdateSecurityDTO {

  @IsString()
  oldPassword!: string;

  @IsString()
  newPassword!: string;

  @IsString()
  newPasswordAgain!: string;

}