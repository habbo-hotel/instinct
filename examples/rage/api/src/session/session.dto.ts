import {IsNotEmpty, IsString} from 'class-validator';
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
