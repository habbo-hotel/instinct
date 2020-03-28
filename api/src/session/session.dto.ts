import { IsString } from 'class-validator';
import { UserExists } from '../user/constraint/user-exists';

export class NewSessionDTO {
  @IsString()
  @UserExists()
  username!: string;

  @IsString()
  password!: string;
}
