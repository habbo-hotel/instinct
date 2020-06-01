import {RequestWithSession} from './session.type';
import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';

@Injectable()
export class SessionGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: RequestWithSession = context.switchToHttp().getRequest();


    if (request.user === undefined) {
      throw new Error('A request without a session made its way into SessionGuard.  Is the `HasSession` decorator applied?');
    }

    return request.user.authorized === 1;
  }
}
