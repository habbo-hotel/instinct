import {RequestWithSession} from './session.type';
import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {UserSessionEntity} from '../../database/rage/user/user-session/user-session.entity';

// tslint:disable-next-line:variable-name - In Typescript decorators start with a capital letter
export const GetSession = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserSessionEntity => {
    const request: RequestWithSession = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
