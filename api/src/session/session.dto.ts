import { IsString, Validate } from 'class-validator';
import { UserExistsConstraint } from '../user/constraint/user-exists';

export class NewSessionDTO {
  @IsString()
  @Validate(UserExistsConstraint)
  username!: string;

  @IsString()
  password!: string;
}
