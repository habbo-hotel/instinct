import {IsNotEmpty, IsString} from 'class-validator';

export class ForgotPasswordDTO {
  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsString()
  @IsNotEmpty()
  passwordAgain!: string;
}
