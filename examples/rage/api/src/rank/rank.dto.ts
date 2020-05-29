import {IsEnum, IsString} from 'class-validator';
import {AUTH_SCOPE} from '../auth/auth.types';

export class NewRankDTO {
  @IsString()
  readonly name!: string;

  @IsString()
  readonly desc!: string;

  @IsString()
  readonly badge!: string;

  @IsEnum(AUTH_SCOPE, {each: true})
  readonly scopes!: AUTH_SCOPE[];
}
