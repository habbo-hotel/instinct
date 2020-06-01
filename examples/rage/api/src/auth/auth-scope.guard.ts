import {Reflector} from '@nestjs/core';
import {RequestWithSession} from '../session/session/session.type';
import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {RankScopeRepository} from '../database/rage/rank/rank-scope/rank-scope.repository';

@Injectable()
export class AuthScopeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector, private readonly rankScopeRepo: RankScopeRepository) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: RequestWithSession = context.switchToHttp().getRequest();

    if (request?.user === undefined) {
      throw new Error('A request without user session made its way into AuthGuard.  Is the @HasSession decorator applied?');
    }

    const scope: string | undefined = this.reflector.get<string>('scope', context.getHandler());

    if (scope === undefined) {
      throw new Error('A request without a scope attached made its way into AuthGuard.  Is the @HasScope decorator applied?');
    }

    return await this.rankScopeRepo.doesRankHaveScope(request.user.user.rankID, scope);
  }
}
